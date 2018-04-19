@extends('layouts.app')
@section('head')
    <style>
        .help-block{
            color: #a94442;
        }
    </style>

@endsection
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-9 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Register</div>
                    <div class="panel-body">
                        <form class="form-horizontal" method="POST" action="{{ route('register') }}">
                            {{ csrf_field() }}
                            <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                                <label for="name" class="col-md-4 control-label">Name</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}" required autofocus>

                                    @if ($errors->has('name'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="user_id" class="col-md-4 control-label">User ID</label>

                                <div class="col-md-6">
                                    <input id="user_id" type="text" class="form-control" name="user_id" value="{{ old('user_id') }}" required autofocus>
                                    @if ($errors->has('user_id'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('user_id') }}</strong>
                                </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="age" class="col-md-4 control-label">Age</label>

                                <div class="col-md-6">
                                    <input id="age" type="text" class="form-control" name="age" value="{{ old('age') }}" required autofocus>
                                    @if ($errors->has('age'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('age') }}</strong>
                                </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="address" class="col-md-4 control-label">Address</label>
                                <div class="col-md-6">
                                    <input id="address" type="text" class="form-control" name="address" value="{{ old('address') }}" required autofocus>
                                    @if ($errors->has('address'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('address') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('gender') ? 'has-error' : '' }}">
                                <label for="gender" class="col-md-4 control-label">Gender</label>

                                <div class="col-md-6">
                                    <input name="gender" type="radio" value="1">Nam
                                    <input name="gender" type="radio" value="0">Nữ
                                    @if ($errors->has('gender'))
                                        <span class="help-block">
                                    <strong>Please choose this field!</strong>
                                </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('level') ? 'has-error' : '' }}">
                                <label for="level" class="col-md-4 control-label">Level</label>
                                <div class="col-md-6">
                                    <input name="level" type="radio" value="0" onclick ="disableTeam()">Normal-Member
                                    <input name="level" type="radio" value="1" onclick="enableTeam()">Member
                                    <input name="level" type="radio" value="2" onclick="enableTeam()">Sub-leader
                                    <input name="level" type="radio" value="3" onclick="disableTeam()">Leader
                                    @if ($errors->has('level'))
                                        <span class="help-block">
                                        <strong>Please choose this field!</strong>
                                </span>
                                    @endif
                                </div>

                            </div>
                            <div class="form-group{{ $errors->has('team') ? 'has-error' : '' }}">
                                <label for="team" class="col-md-4 control-label">Team</label>
                                <div class="col-md-6">
                                    <input name="team_id" type="radio" value="1">IT-Hà Nội
                                    <input name="team_id" type="radio" value="2">IT-Đà Nẵng
                                    @if ($errors->has('team_id'))
                                        <span class="help-block">
                                        <strong>Please choose this field!</strong>
                                </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>

                                    @if ($errors->has('email'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                <label for="password" class="col-md-4 control-label">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password" required autofocus>

                                    @if ($errors->has('password'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>

                                <div class="col-md-6">
                                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        Register
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        <script>
            function disableTeam() {
                team = document.getElementsByName("team_id");
                for(i = 0; i< team.length; i++){
                    team[i].disabled = true;
                }
            }
            function enableTeam(){
                team = document.getElementsByName("team_id");
                for(i = 0; i< team.length; i++){
                    team[i].disabled = false;
                }
            }
        </script>
    </div>
@endsection
