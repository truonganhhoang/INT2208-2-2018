<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        $validate =  [
            'name' => 'required|string|max:255',
            //them tuoi
            'age' => 'required|Integer',
            //
            'user_id' => 'required|string|max:255|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'gender' => 'required',
            'level' => 'required',
            'password' => 'required|string|min:6|confirmed',
        ];

        if(isset($data['level']) && ($data['level'] != 0 && $data['level'] != 3)) {
            $validate['team_id']='required';
        }
//        $error = Validator::make($data, [
//            'name' => 'required|string|max:255',
//            'user_id' => 'required|string|max:255|unique:users',
//            'email' => 'required|string|email|max:255|unique:users',
//            'gender' => 'required',
//            'level' => 'required',
//            'password' => 'required|string|min:6|confirmed',
//        ]);
        $error = Validator::make($data,$validate);
     //   dd($error);
        return $error;
    }
//    protected function validateTeam( array $data){
//        $error = Validation :: make($data,[
//            'team_id' =>'required',
//        ]);
//        return $error;
//    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        if(isset($data['level']) && ($data['level'] == 0 || $data['level'] ==3)){
            $data['team_id'] = null;
        }
        $user = [
            'name' => $data['name'],
            'user_id' => $data['user_id'],
            'age' => $data['age'],
            'address' => $data['address'],
            'email' => $data['email'],
            'gender' => $data['gender'],
            'level' => $data['level'],
            'team_id' => $data['team_id'],
            'password' => bcrypt($data['password']),
        ];

        return User::create($user);
    }
}
