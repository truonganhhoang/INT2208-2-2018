<?php
/**
 * Created by PhpStorm.
 * User: Mrs Trang
 * Date: 25/12/2017
 * Time: 04:59
 */
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Input;
use App\User;
class SearchController extends Controller
{

    public function autocomplete(Request $request, $type, $id)
    {
//        if ($type == "assignTo") {
//            $results = assignAutoComplete($request, $id);
//            return response()->json($results);
//        }
        $term = $request->term;
        $input = explode(",",$term);
        $len = count($input);
        $preItems = [];
        foreach ($input as $item)
            $preItems []= $item;
        $preIput = implode(',', $preItems);
        $preUserIds = $this->getUserIds($preIput);

        $findElement = trim($input[$len-1]," ");

       // var_dump($findElement);
        $results = [];
        $queries = User::where('name', 'LIKE', '%' . $findElement . '%');
        if($type == "createRequest") {
            $queries = $queries->where('id', '<>', Auth::id());
        }
        else if($type == 'editRequest'){
                $req = \App\Request::find($id);
                $createUser = $req->create_by;
                $queries = $queries->where('id', '<>', $createUser);
        }
        else if ($type == 'assignTo'){
            $req = \App\Request::find($id);
            $queries = $queries->where('team_id', $req['team_id']);
        }
        foreach ($preUserIds as $preUserId)
            $queries = $queries->where('id','<>',$preUserId);

        $queries = $queries->take(5)->get();
        foreach ($queries as $query => $value) {
            $results[] = ['id' => $value->id, 'value' => $value->name . "[" . $value->user_id . "]"];
        }
        return response()->json($results);
    }

    // copy from RequestController
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
}
