<?php

namespace App\Http\Controllers;

use App\Read;
use App\Relater;
use Illuminate\Http\Request;

class ReadController extends Controller
{
    //
    public static function create(\App\Request $request){
        self::checkUnread($request->id,$request['create_by']);
        if ($request['assigned_to'] != null)
            self::checkUnread($request->id, $request['assigned_to']);

        $relaters = Relater::all()->where('request_id',$request->id);
        foreach ($relaters as $relater)
            self::checkUnread($request['id'],$relater['user_id']);
    }

    public static function checkUnread($requestId, $userId){
        if (Read::all()->where('request_id',$requestId)->where('user_id',$userId)->isEmpty())
            return Read::create([
                'request_id' => $requestId,
                'user_id' => $userId,
                'status' => 0
            ]);
    }

    public static function checkRead($requestId, $userId){
        $reads = Read::all()->where('request_id',$requestId)->where('user_id',$userId);
        foreach ($reads as $read) {
            $read['status'] = 1;
            $read->save();
        }

    }

    public static function check($requestId,$userId){
        $read = Read::all()->where('request_id',$requestId)->where('user_id',$userId);
        if (count($read) == 1)
            foreach ($read as $r) {
                if ($r->status == 0)
                    return false;
            }
        return true;
    }
}
