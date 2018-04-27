<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    public $timestamps = true;
    protected $fillable = [
        'request_id', 'user_id','content',
    ];

    public function request_id(){
        return $this->belongsTo(Request::class,'request_id');
    }
    public function user_id(){
        return $this->belongsTo(User::class,'user_id');
    }

}
