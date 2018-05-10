<?php
/**
 * Created by PhpStorm.
 * User: Mrs Trang
 * Date: 24/12/2017
 * Time: 16:23
 */
namespace App\Http\Controllers;

use App\Image;
use App\Relater;
use App\Team;
use App\Thread;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Tests\TestCase;
use Mail;
class RequestEditController extends RequestController
{

    protected $redirectTo = '/editRequest/';

    public function getImage($filename){
        $file = Storage::get($filename);     //The filename is stored in a database.
        return response($file, 200)->header('Content-Type', 'image/jpeg');
}

    public function getEditView($id){
        // 1.lay thong tin của request
        // 2.fill vào view -> return view('editRequest', $data);
        $teams = Team::all();
        $request  = \App\Request::find($id);
        $request->load('create_by');
        $request->load('assign_to');
        $request->load('team');

        $relaters = Relater::all()->where('request_id',$request['id']);
        $relaters->load('user_id');

        $images = Image::all()->where('request_id',$id);
      //  dd($images);
        $urlImage=[];
        foreach ($images as $image){
            $urlImage[]= $image->url_image;
        }

        //hiển thị bình luận
        $comments = Thread::all()->where('request_id',$request['id']);
        $comments->load('user_id');
        $comments->load('request_id');

        $data['teams'] = $teams;
        $data['request'] = $request;
        $data['relaters'] = $relaters;
        $data['images'] =$urlImage;
        $data['comments'] = $comments;
        if (Auth::id() == $request['relations']['create_by']->id || Auth::user()->level == 2|| Auth::user()->level == 3) {
            ReadController::checkRead($id,Auth::id());
            return view('editRequest', $data);
        }
        else if((!empty($request['relations']['assign_to'])) &&(Auth::id() == $request['relations']['assign_to']->id)){
                ReadController::checkRead($id,Auth::id());
                return view('editRequest', $data);
        }
        else {
            foreach ($relaters as $relater) {
                if (Auth::id() == $relater['relations']['user_id']->id) {
                    ReadController::checkRead($id,Auth::id());
                    return view('editRequest', $data);
                }
            }
        }
            return view('home');
    }
    protected function editValidator(array $data){
        return Validator::make($data,[
            'id' => 'required|int',
            'priority' => 'required|int|min:1|max:6',
            'deadline' => 'required|date',
            'team' => 'required',
            'status' => 'required',
        ]);
    }
    public function editRequest(Request $request){
        $data =$request->all();
        $this ->editValidator($data)->validate();
        $this->edit($data,$data['id']);
        return redirect($this->redirectTo.$data['id']);
    }

    protected function edit(array $data,$id){
        $request = \App\Request::find($id);
        $request->priority = $data['priority'];
        $request->deadline = $data['deadline'];
        if (array_key_exists('assigned_to',$data)){
            $assignUser = $this->getUserIds($data['assigned_to']);
         //   dd($assignUser);
            if (count($assignUser) == 1 && $request->assigned_to != $assignUser[0])
                $request->assigned_to = $assignUser[0];
        }

        $request->team_id = $data['team'];
        $request->status = $data['status'];
        //them noi dung
        $request->content = $data['content'];
        //cap nhat bang trung gian
        // $request->relater()->sync($data['relater']);
        $request->save();

        //update relater
        $relaters = Relater::all()->where('request_id',$id);
        $relaterIds = [];
        foreach ($relaters as $relater){
            $relaterIds []= $relater['user_id'];
        }
        $newRelaterIds = $this->getUserIds($data['relater']);
        $diffRelaters = array_diff($relaterIds,$newRelaterIds);
        $diffNewRelaters = array_diff($newRelaterIds,$relaterIds);
        foreach ($diffRelaters as $diffRelater)
            Relater::where('user_id', $diffRelater)->delete();
        foreach ($diffNewRelaters as $diffNewRelater)
            RelaterController::create($id,$diffNewRelater);
        ReadController::create($request);

        CommentController::storeComment($id,Auth::id(),$data['comment']);
    }
}