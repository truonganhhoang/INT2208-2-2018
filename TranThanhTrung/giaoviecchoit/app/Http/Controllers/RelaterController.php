<?php

namespace App\Http\Controllers;

use App\Relater;

class RelaterController extends Controller
{
    //
    public static function create($requestId, $userId){
        //check đã có relater hay chưa
        if (Relater::all()->where('request_id',$requestId)->where('user_id',$userId)->isEmpty())
            return Relater::create([
            'request_id' => $requestId,
            'user_id' => $userId,
        ]);
    }
}
