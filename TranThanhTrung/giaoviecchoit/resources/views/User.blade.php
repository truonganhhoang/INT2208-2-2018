@extends('layouts.app');
@section('head')
    <link rel="stylesheet" href="{{asset("css/bootstrap.css")}}">
    <script type="text/javascript" src="{{asset("js/bootstrap.min.js")}}"></script>
    <style >
        .row{
            padding: 2px;
        }

    </style>
@endsection
@section('content')
    <div id="container" class="col-sm-offset-2 col-md-8 ">
            <?php
                $user = Auth::user();
                ?>
        <div class="panel panel-default" style="background-color: #98cbe8; padding : 0px ">
            <div class = 'panel panel-headding' style=" padding : 0px ">
                <label class="control-lable h3">Profile</label>
            </div>
            <div class="panel panel-body" style="background-color: #98cbe8; padding : 0px ">
                <div class="row" id="name">
                <label class="col-md-3">{{env('uName')}}:</label>
                <span class="col-md-6">{{$user->name}}</span>
                <button class ='btn glyphicon glyphicon-pencil' onclick="editUserInfo('name')"></button>
            </div>
            <div class="row" id="user_id">
                <label  class="col-md-3">{{env('uId')}}:</label>
                <span class="col-md-6">{{$user->user_id}}</span>
                <button class ='btn glyphicon glyphicon-pencil' onclick="editUserInfo('user_id')"></button>
            </div>
            <div class="row" id="age">
                <label class="col-md-3">{{env('uAge')}}:</label>
                <span class="col-md-6">{{$user->age}}</span>
                <button class ='btn glyphicon glyphicon-pencil' onclick="editUserInfo('age')"></button>
            </div>
            <div class="row" id="address" >
                <label class="col-md-3">{{env('uAddress')}}:</label>
                <span class="col-md-6">{{$user->address}}</span>
                <button class ='btn glyphicon glyphicon-pencil' onclick="editUserInfo('address')"></button>
            </div>
            <div class="row"id="gender">
                <label class="col-md-3">{{env('uGender')}}:</label>
                @if($user->gender == 1)
                    <span class="col-md-6">Nam</span>
                @else
                    <span class="col-md-6">Nam</span>
                @endif
                <button class ='btn glyphicon glyphicon-pencil' onclick="editUserInfo('gender')"></button>
            </div>
            <div class="row" id="level">
                <label  class="col-md-3">{{env('uLevel')}}:</label>
                <span class="col-md-6">{{env('level.'.$user->level)}}</span>
                <button class ='btn glyphicon glyphicon-pencil' onclick="editUserInfo('level')"></button>
            </div>
                @if($user->level !=0 && $user->level !=3)
                    <div class="row" id="team_id">
                        <label  class="col-md-3">Team:</label>
                        @if($user->team ==1)
                            <span class="col-md-6">IT-HaNoi</span>
                        @else
                            <span class="col-md-6">IT-DaNang</span>
                        @endif
                        <button class ='btn glyphicon glyphicon-pencil' onclick="editUserInfo('level')"></button>
                    </div>
                @endif
            <div class="row" id="email">
                <label  class="col-md-3">{{env('uEmail')}}:</label>
                <span class="col-md-6">{{$user->email}}</span>
                <button class ='btn glyphicon glyphicon-pencil' onclick="editUserInfo('email')"></button>
            </div>
            <div class="col-md-3 col-md-ofsset-9">
                <button class="btn btn-primary" id="save" style="display: none" onclick="store()">save</button>
                <button class="btn btn-primary" id="cancel" style="display: none" onclick="cancel()">cancal</button>
            </div>
            </div>
    </div>
    </div>
    <script type="text/javascript">
        function store(){

        };
        function cancel(){
            var info = document.querySelectorAll("span");
          //  document.write(inputEdit);
            for(i = 0; i< info.length ; i++){
                info[i].hidden = false;
            }
            var inputForm = document.querySelectorAll("form");
            for(i = 0; i< inputForm.length; i++) {
                var parent = inputForm[i].parentNode;
                parent.removeChild(inputForm[i]);
            }
            var inputForm = document.getElementById("container").querySelectorAll("button");
            for(i = 0; i< inputForm.length; i++) {
                if((inputForm[i].id != "save") && (inputForm[i].id != "cancel")) {
                    inputForm[i].style.display = 'inline-block';
                }
                else{
                    inputForm[i].style.display="none";
                }
            }
        };
        function editUserInfo(id){
            var editElement = document.getElementById(id);
            var lableChild = editElement.querySelector("label");
            if(lableChild != null) {
                (lableChild.nextElementSibling).hidden = true;
            }
            var form = document.createElement('form');
            form.method="POST";
            form.id = id+'Form';
            form.className = 'col-md-6';
            {{--form.action="{{ route('userInfo') }}";--}}
            var input = document.createElement('input');
            input.name=id;

            if(id.valueOf() == 'email'){
                input.type = 'email';
                input.className = 'form-control col-md-5';
                input.autocomplete  = "on";
            }
            else if(id.valueOf() == 'gender') {
                input.type = "radio";
                input.value = "0";
                input.innerHTML="Nu";

                var input2 = document.createElement('input');
                input2.name=id;
                input2.type ="radio";
                input2.value = "1";
                // input2.appendChild(document.createTextNode("Nam"));
                // form.appendChild(input2);
            }
            else{
                input.type = "text";
                input.className = 'form-control col-md-5';
            }
           // input.required =true;
           // input.placeholder = lableChild.nextElementSibling.innerHTML;
            form.appendChild(input);
            var buttonEdit = editElement.querySelector("button");
            editElement.insertBefore(form,buttonEdit);
            //editElement.insertBefore(form,lableChild.nextSibling);
            var edit1 = editElement.lastElementChild;
               // edit1.disabled = true;
                edit1.style.display = 'none';
            var save = document.getElementById("save");
                save.style.display ='inline-block';
            var cancal=document.getElementById("cancel");
                cancal.style.display = 'inline-block';
            // var save = document.getElementsByName("save");
            //
            //     save = document.createElement('button');
            //     save.type='submit';
            //     save.innerHTML= "save";
            //     save.onclick = store();
            //    //save.disabled = true;
            //     document.getElementById("container").appendChild(save);
            //
            // var cancel = document.getElementsByName("save");
            // if(cancel == null){
            //     cancel = document.createElement('button');
            //     cancel.innerHTML= "save";
            //     cancel.onclick(cancel());
            //     document.getElementsById("container").appendChild(cancel);
            // }

        }

    </script>
@endsection