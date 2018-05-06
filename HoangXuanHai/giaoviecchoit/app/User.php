<?php

namespace App;


use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    public $timestamps = true;
    use Notifiable;
    // sử dụng cho bảo mật, hiện tại chưa cần thiết
    protected $fillable = [
        'username', 'user_id', 'password', 'name', 'gender', 'age', 'address', 'email', 'level', 'team_id',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];
}
