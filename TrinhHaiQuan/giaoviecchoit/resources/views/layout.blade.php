@extends('layouts.app')

@section('head')
    <title> @yield('title')</title>

    <link rel="stylesheet" href="{{asset("css/bootstrap.css")}}">
    <style type="text/css">
        .panel{
            margin-bottom: 10px;
        }
        .panel-body{
            padding: 5px;
            border: 1px solid transparent;
        }
        .panel-heading{
            padding: 5px;
        }
        #createRequest{
            margin: 15px;
            background-color: #23527c;
            color: #FFFFFF;
            margin-top: 0px;
        }
        #createRequest:hover{
            color: deeppink;

        }
        .glyphicon{
            padding: 5px;
        }
        #content{
            margin: 1%;
        }
    </style>
    <script type="text/javascript" src="{{asset("js/bootstrap.min.js")}}"></script>
    @yield('child_head')

@endsection

@section('content')
<div class ="container-fluid" style="background-color:#98cbe8 ">
        <div class ='col-md-2' id= 'menu' style="background-color:#98cbe8 ">
           <!-- <div class="panel-title">Request IT</div>-->
            <div class="row">
                <a class="btn-print-this btn btn-primary" id="createRequest" href=" {{ url('/createRequest') }}">+ THÊM YÊU CẦU
                </a>
            </div>

            <?php
                $i = 0;
                for ($i; $i <= 4; $i++){
                    if ((Auth::user()->level == 0) && (($i == 2) || ($i == 3) || ($i == 4)))
                        break;
                    if ((Auth::user()->level == 1) && (($i == 3) || ($i == 4)))
                        break;
                    if ((Auth::user()->level == 2) && ($i == 4))
                        break;
                    if ((Auth::user()->level == 3) && ($i == 3))
                        $i++;
                ?>

            <div class="panel panel-default">
                <div id ="{{ 'menuHeading'.$i }}" class="panel-heading " data-toggle="collapse" data-target ="{{ '#menu'.$i }}" onclick="open_close('{{'#menuHeading'.$i}}')">
                   {{--<div class="col-sm-12">--}}
                    <label>{{ env(env('request.'.$i).'.label') }}</label>
                    <span  class ="pull-right glyphicon glyphicon-minus"></span>
                   {{--</div>--}}
                </div>

                <div class="panel-collapse collapse in" id = "{{ 'menu'.$i }}">
                    <div class="panel-body " id ="allRequire" onclick = "display()">
                        <span class="glyphicon glyphicon-list-alt"></span>
                        <a href="{{ url('filter/'.env('request.'.$i).'/all') }}">{{ env('status.0') }}</a>
                        @if(\App\Http\Controllers\RequestFilterController::myUnreadRequest(env(env('request.'.$i)),'all') !=0)
                            <span class="pull-right badge" style="background-color: #2ab27b" id="unread">{{ \App\Http\Controllers\RequestFilterController::myUnreadRequest(env(env('request.'.$i)),'all') }}</span>
                        @endif
                    </div>
                    <div class="panel-body" id ="newRequire" onclick="">
                        <span class = "glyphicon glyphicon-envelope"></span>
                        <a href="{{ url('filter/'.env('request.'.$i).'/new') }}">{{ env('status.1') }}</a>
                        @if(\App\Http\Controllers\RequestFilterController::myUnreadRequest(env(env('request.'.$i)),'new') !=0)
                            <span class="pull-right badge"style="background-color: #269abc" id="unread">{{ \App\Http\Controllers\RequestFilterController::myUnreadRequest(env(env('request.'.$i)),'new') }}</span>
                        @endif
                    </div>
                    <div class="panel-body" id="inprogressRequest">
                        <span class=" glyphicon glyphicon-import"></span>
                        <a href="{{ url('filter/'.env('request.'.$i).'/inprogress') }}">{{ env('status.2') }}</a>
                        @if(\App\Http\Controllers\RequestFilterController::myUnreadRequest(env(env('request.'.$i)),'inprogress') !=0)
                            <span class="pull-right badge" style="background-color: #99cb84" id="unread">{{ \App\Http\Controllers\RequestFilterController::myUnreadRequest(env(env('request.'.$i)),'inprogress') }}</span>
                        @endif
                    </div>
                    <div class="panel-body" id ="resolvedRequire">
                        <span class=" glyphicon glyphicon-registration-mark"></span>
                        <a href="{{ url('filter/'.env('request.'.$i).'/resolved') }}">{{ env('status.3') }}</a>
                        @if(\App\Http\Controllers\RequestFilterController::myUnreadRequest(env(env('request.'.$i)),'resolved') !=0)
                            <span class="pull-right badge" style="background-color:#8eb4cb " id="unread">{{ \App\Http\Controllers\RequestFilterController::myUnreadRequest(env(env('request.'.$i)),'resolved') }}</span>
                        @endif
                    </div>

                    <?php if ($i != 0 && $i != 1){ ?>
                        <div class="panel-body" id="FeedbackRequire">
                            <span class="glyphicon glyphicon-log-in"></span>
                            <a href="{{ url('filter/'.env('request.'.$i).'/feedback') }}">{{ env('status.5') }}</a>
                            @if(\App\Http\Controllers\RequestFilterController::myUnreadRequest(env(env('request.'.$i)),'feedback') !=0)
                                <span class="pull-right" id="unread">{{ \App\Http\Controllers\RequestFilterController::myUnreadRequest(env(env('request.'.$i)),'feedback') }}</span>
                            @endif
                        </div>
                    <?php } ?>

                    <div class="panel-body" id="OutOfDateRequire">
                        <span class=" glyphicon glyphicon-calendar"></span>
                        <a href="{{ url('filter/'.env('request.'.$i).'/outOfDate') }}">{{ env('status.4') }}</a>
                        @if(\App\Http\Controllers\RequestFilterController::myUnreadRequest(env(env('request.'.$i)),'outOfDate') !=0)
                            <span class="pull-right badge" style="background-color: #c9302c" id="unread">{{ \App\Http\Controllers\RequestFilterController::myUnreadRequest(env(env('request.'.$i)),'outOfDate') }}</span>
                        @endif
                    </div>

                    <?php if (($i == 3) || ($i == 4)){ ?>
                    <div class="panel-body" id="ClosedRequire">
                        <span class="glyphicon glyphicon-folder-close"></span>
                        <a href="{{ url('filter/'.env('request.'.$i).'/close') }}">{{ env('status.7') }}</a>
                        @if(\App\Http\Controllers\RequestFilterController::myUnreadRequest(env(env('request.'.$i)),'close') !=0)
                            <span class="pull-right" id="unread">{{ \App\Http\Controllers\RequestFilterController::myUnreadRequest(env(env('request.'.$i)),'close') }}</span>
                        @endif
                    </div>
                    <?php } ?>

                </div>

            </div>
            <?php } ?>
        </div>
        <div class="col-sm-10">
                {{--@include('createRequest');--}}
                @yield('child_content')
        </div>
</div>
<script type="text/javascript">
    function display() {

    }
    function open_close(id){
        var imgChild = $(id).children("span");
        var str = imgChild.attr("class");
        if(str.search("glyphicon-minus") != -1){
            str = str.replace('glyphicon-minus','glyphicon-plus');
            //document.write(str);
            imgChild.attr("class",str);
        }
        else{
            str = str.replace('glyphicon-plus','glyphicon-minus');
            imgChild.attr("class",str);
        }
    }
</script>
@endsection