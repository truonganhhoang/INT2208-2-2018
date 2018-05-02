<?php

namespace App\Http\Controllers;

use App\Relater;
use App\Team;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Tests\TestCase;
use Mail;
class RequestController extends Controller
{
    //
    protected $redirectTo = '/filter/myRequests/all';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getCreateView(){
        $teams = Team::all();
        $data['teams'] = $teams;
        return view('createRequest',$data);
    }
    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'title' => 'required|string|max:255',
            'priority' => 'required|int|min:1|max:6',
            'deadline' => 'required|date',
            'team' => 'required',
            'content' => 'required|string',
        ]);
    }
    public function createRequest(Request $request)
    {
        $data = $request->all();
        $relaterIds = $this->getUserIds($request['relater']);
        $this->validator($data)->validate();
        $newRequest = $this->create($data, $relaterIds);
        // xu ly luu anh
        $images = $request->file('file');
        if(!empty($images)){
            foreach ($images as $image){
                $imageCtrl = new ImageController();
                $imageCtrl->storeImage($newRequest,$image);
            }
        }
        ReadController::create($newRequest);
        $this->sendMail($newRequest,1);
        return redirect($this->redirectTo);
    }

    //lay id cua nguoi lien quan
    protected function getUserIds($data){
        $relaterIds = [];
        if (!empty($data)) {
            $arrayRelater = explode(',', $data);
            foreach ($arrayRelater as $relater) {
                // sử lý để lấy user_id của người liên quan VD a[id]
                $item = explode("[", $relater); //-> item[1]= "id]"
                if (count($item) >= 2) {
                    $relaterUserId = explode("]", $item[1]); //-> realter_id[0]=id
                    // 1 relater là 1 user
                    $users = User::all()->where('user_id',$relaterUserId[0]);
                    foreach ($users as $user){
                        $relaterIds[] = $user['id'];
                    }
               }
            }
        }
        return $relaterIds;
    }

    public function create(array $data, array $relaterIds){
        $newRequest = \App\Request::create([
            'title' => $data['title'],
            'create_by' => Auth::id(),
            'content' => $data['content'],
            'status' => '1',
            'priority' => $data['priority'],
            'deadline' => $data['deadline'],
            'team_id' => $data['team'],
        ]);

        //tìm sub-leader của team để assign
        $users = User::all()->where('team_id',$data['team'])->where('level',2);
        foreach ($users as $user)
            if ($newRequest['assigned_to'] == null) {
                $newRequest['assigned_to'] = $user->id;
                $newRequest->save();
            }

        foreach ($relaterIds as $relaterId){
            RelaterController::create($newRequest['id'],$relaterId);
        }
        return $newRequest;
    }
    public function comment(Request $request, $id){
        $comment = $request->all();
        $requestOfComment = Request::find($id);
        // can them note va type
        $requestOfComment->comment()->attach(Auth::id(),['content'=>$comment['comment'],'type'=>'','note'=>'']);
        //thong bao cho nguoi lien quan
        $relaters = $requestOfComment->relater()->user_id;
        if (!emptyArray($relaters)){
            foreach ($relaters as $relater) {
                $email = User::find($relater)->email;
                Mail::send('Notifi.mailNotifi', array('type' => env('typeNotifi.3'), 'person' => Auth::name(), 'name' => $requestOfComment->title, 'content' => $comment['comment']), function ($msg) use($email) {
                    $msg->from('btlweb.uet@gmail.com', 'btlweb');
                    $msg->to($email, env('typeNotifi.3'));
                });
            }
        }
    }

    public static function sendMail(\App\Request $data, $type){
        // mail cho nguoi tao request
        RequestController::mail($data, User::find($data['create_by']),$type);

        //mail cho người thực hiện (nếu có)
        if (!is_null($data['assign_to'])){
            RequestController::mail($data, User::find($data['assigned_to']),$type);
        }

        //mail cho người liên quan
        $relaters = Relater::all()->where('request_id',$data['id']);
        foreach ($relaters as $relater){
            RequestController::mail($data, User::find($relater['user_id']), $type);
        }
    }

    public static function  mail(\App\Request $data, User $user, $type){
        Mail::send('Notifi.mailNotifi', array(
            'person' => $user->name,
            'name' => $data['title'],
            'content' => $data['content'],
            'type' => $type,
        ), function ($msg) use ($data, $user) {
            $msg->to($user->email, env('typeNotifi.1'))->subject(env('typeNotifi.1') . " " . $data['title']);
        });
    }
}
