<?php

namespace App\Http\Controllers;

use App\Thread;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Store a newly created resource in storage
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request){
        $this->validate($request, array(
            'request_id' => 'required',
            'user_id' => 'required',
            'content' => 'required',
        ));
        $rq = \App\Request::find($request->request_id);
        $comment = Thread::create([
            'request_id' => $request['request_id'],
            'user_id'  => $request['user_id'],
            'content' => $request['content']
        ]);
        RequestController::sendMail($rq, 2);
        return redirect()->back();
    }

    public static function storeComment($requestId, $userId, $content){
        $rq = \App\Request::find($requestId);
        $comment = Thread::create([
            'request_id' => $requestId,
            'user_id'  => $userId,
            'content' => $content
        ]);
        RequestController::sendMail($rq, 2);
    }
}
