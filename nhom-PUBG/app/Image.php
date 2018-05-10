<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'request_id', 'url_image',
    ];

    public function request_id(){
        return $this->belongsTo(Request::class,'request_id');
    }
}
