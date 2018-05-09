<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TheHoc;
class TheHocController extends Controller
{
    //
    public function getTheHoc() {
    	$id = rand(1, 15);
    	$thehoc = TheHoc::find($id);
    	//echo $thehoc;
    	return view('view.layout.thehoc', ['thehoc'=>$thehoc]);
    }
}
