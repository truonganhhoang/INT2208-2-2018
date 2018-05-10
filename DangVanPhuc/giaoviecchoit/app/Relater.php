<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Relater extends Model
{
    //
    /* Trả về công việc
    * @return Request
     *
    */
    public $timestamps = false;
    protected $fillable = [
        'request_id', 'user_id',
    ];
    public function request_id(){
        return $this->belongsTo(Request::class,'request_id');
    }

    /* Trả về người liên quan
    * @return User
    */
    public function user_id (){
        return $this->belongsTo(User::class,'user_id');
    }
}
