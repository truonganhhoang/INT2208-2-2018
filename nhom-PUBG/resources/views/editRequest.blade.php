@extends('layout')
@section('child_head')
    <link rel="stylesheet" href={{ asset('css/ajax/libs/jqueryui/jquery-ui.css') }}>

    <script src= {{ asset('js/ajax/libs/jquery/jquery.min.js') }}></script>
    <script src= {{ asset('js/ajax/libs/jqueryui/jquery-ui.min.js') }}></script>
@endsection
@section('child_content')
    <div id ="editRequest" class="container-fluid">
        <div class=" panel panel-default" >
            <div class="panel-heading ">
                <label class="h4 col-md-7"><span class="glyphicon glyphicon-globe"></span>{{ $request->title }}</label>
                <div class="btn-toolbar">
                    <button type="button" class=" btn btn-default" title="Thay đổi bộ phận IT" onclick="edit('team')" id="buttonEditTeam"><span class="glyphicon glyphicon glyphicon-cd small "></span></button>
                    <button type="button" class=" btn btn-default" title="Thay đổi mức độ ưu tiên" onclick="edit('priority')" id="buttonEditPri"><span class="glyphicon glyphicon-retweet small"></span></button>
                    <button type="button" class=" btn btn-default" title="Thay đổi deadline" onclick="edit('deadline')" id="buttonEditDeadline"><span class="glyphicon glyphicon-calendar small"></span></button>
                    <button type="button" class=" btn btn-default" title="Assign" onclick="edit('assigned_to')" id="buttonEditAssigned"><span class="glyphicon glyphicon-hand-right small"></span></button>
                    <button type="button" class=" btn btn-default" title="Thay đổi người liên quan" onclick="edit('relater')" id="buttonEditRelater"><span class="glyphicon glyphicon-user small"></span></button>
                    <button type="button" class=" btn btn-default" title="Thay đổi trạng thái" onclick="edit('status')" id="buttonEditStatus"><span class="glyphicon glyphicon-transfer"></span></button>
                </div>
            </div>
            <div class="panel-body">
                <form method="post" id="editForm" action="{{ route('editRequest') }}">
                    {{ csrf_field() }}
                    <input id="id" name="id" value="{{$request->id}}" hidden/>
                    <div class="row">
                        <div class="col-md-6">
                            <label class="col-md-5" id="createDate">Ngày tạo:</label>
                            <span class="col-md-7">{{ $request->created_at }}</span>
                        </div>
                        <div class="col-md-6">
                            <label class="col-md-5">Ngày hết hạn:</label>
                            <span class="col-md-7">{{$request->deadline}}</span>
                            <input id="deadline" type="date" name="deadline" class="form-control col-md-7" value={{$request->deadline}}>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label class="col-md-5" id="createBy">Người yêu cầu:</label>
                            <span class="col-md-7">{{$request['relations']['create_by']->name}}</span>
                        </div>

                        <div class="col-md-6">
                            <label class="col-md-5">Người thực hiện:</label>
                            <span class="col-md-7">{{$request['relations']['assign_to'] == null ? '' : $request['relations']['assign_to']->name.'['.$request['relations']['assign_to']->user_id.']'}}</span>
                            <input id="assigned_to" name="assigned_to" class="form-control col-md-7" type="text" placeholder="Người xử lý công việc" value={{$request['relations']['assign_to'] == null ? '' : $request['relations']['assign_to']->name.'['.$request['relations']['assign_to']->user_id.']'}}>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-md-6">
                            <label class="col-md-5">Mức độ ưu tiên:</label>
                            <span class="col-md-7">{{env('priority.'.$request->priority)}}</span>
                            <select class="form-control col-md-7" id="priority" name="priority" >
                                <option value="1">{{env('priority.1')}}</option>
                                <option value="2">{{env('priority.2')}}</option>
                                <option value="3">{{env('priority.3')}}</option>
                                <option value="4">{{env('priority.4')}}</option>
                            </select>

                        </div>
                        <div class="col-md-6">
                            <label class="col-md-5">Trạng thái:</label>
                            <span class="col-md-7">{{env('status.'.$request->status)}}</span>
                            <select class="form-control col-md-7" id="status" name="status">
                                <option id='status1' value="1">{{env('status.1')}}</option>
                                <option id='status2' value="2">{{env('status.2')}}</option>
                                <option id='status3' value="3">{{env('status.3')}}</option>
                                <option id='status7' value="7">{{env('status.7')}}</option>
                                <option id='status5' value="5">{{env('status.5')}}</option>
                                <option id='status6' value="6">{{env('status.6')}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label class="col-md-5">Bộ phận IT:</label>
                            <span class="col-md-7">{{$request['relations']['team']->name}}</span>

                            <select class="form-control col-md-7" id="team" name="team">
                                <?php
                                foreach($teams as $team){
                                ?>
                                    <option value="{{ $team->id }}"> {{ $team->name }} </option>
                                <?php
                                }
                                ?>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="col-md-5">Người liên quan:</label>
                            <?php
                                $relatersLabel = '';
                            foreach ($relaters as $relater){
                                $relatersLabel = $relatersLabel.$relater['relations']['user_id']->name.'['.$relater['relations']['user_id']->user_id.'],';
                            } ?>
                            <span class="col-md-7">
                                  {{$relatersLabel}}
                            </span>
                            <input id="relater" name="relater" class="form-control col-md-7" type="text">
                            {{--<input id="relater" class="form-control col-md-7" type="text" value = {{$request->relater}} placeholder={{$request->relater}}>--}}

                        </div>
                    </div>

                    <div class="row" style="padding-top: 10px">
                    <div class="col-md-12">
                        <label class="col-md-5">NỘI DUNG</label>
                    </div>
                    </div>
                    <div class="col-md-10 col-md-offset-1">
                        <textarea type="text" class="form-control" id="content" rows = '10' name="content">{{$request->content}}</textarea>
                    </div>
                    <div class="btn-toolbar col-md-3 pull-right">
                    <button type="button" class="btn btn-primary" style="margin-top: 5px" id="save">save</button>
                    <button type="button" class="btn btn-primary " style="margin-top: 5px" id="cancel" >cancel</button>
                    </div>

                    <input id="commentEditForm" name="comment" hidden>

                    <div class = "col-md-12">
                        <?php
                        //hien thi anh
                        foreach ($images as $image){
                            ?>
                        <a href="{{url('/image/'.$image)}}" title="Nhấn để xem"><img src="{{url('/image/'.$image)}}" width="200" height="200"></a>
                        <?php
                        }
                        ?>
                    </div>
                </form>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel panel-headding col-md-12">
                <h3 class="comment-title">
                    <span class="glyphicon glyphicon-comment"></span> Bình luận</h3>
            </div>
            <div class="panel panel-body col-md-12" id="displayComment">

                    @foreach($comments as $comment)
                        <div class="comment col-md-12">
                            <div class="row">
                                <div class="author-info">
                                    <div class="col-md-1">
                                        <img src="{{ "https://at-cdn-s01.audiotool.com/2013/05/11/users/guess_audiotool/avatar256x256-709d163bfa4a4ebdb25160d094551c33.jpg"}}" width="50" height="50" alt="" class="img-circle">
                                    </div>
                                    <div class="col-md-9">
                                        <div class="author-name">
                                            <label>{{$comment['relations']['user_id']->name}}</label>
                                            <p class="author-time" style="font-size: 12px "> {{$comment->created_at}}</p>
                                        </div>
                                    </div>
                               </div>
                            </div>
                            <div class="comment-content col-md-offset-1">
                                {{$comment->content}}
                            </div>
                            <br>
                            <br>
                        </div>
                   @endforeach
            </div>
            <div class=" panel panel-body">

                <div id="comment-form" style="margin-top:50px;" class="col-md-8 col-md-offset-2">
                    <form id="comment" method="post" action="{{route("comment.store", $request->id)}}">
                        {{csrf_field()}}
                        <input id="request_id" name="request_id" value="{{$request->id}}" hidden>
                        <input id="user_id" name="user_id" value="{{\Illuminate\Support\Facades\Auth::id()}}" hidden>
                        <textarea type="text" class="form-control" id="requestComment" name="content" ></textarea>
                        <div class="btn-toolbar col-md-3 pull-right">
                            <button class="btn btn-primary" style="margin: 5px" onclick="submit()" id="commentButton">Bình luận</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        $(document).ready(function () {
            $('#priority').hide();
            $('#deadline').hide();
            $('#team').hide();
            $('#assigned_to').hide();
            $('#relater').hide();
            $('#status').hide();
            $('#save').hide();
            $('#save').click(save);
            $('#cancel').hide();
            $('#cancel').click(cancel);
            $('#content').attr('readonly',true);
            // an tat ca cac nut
            $('#buttonEditAssigned').hide();
            $('#buttonEditTeam').hide();
            $('#buttonEditPri').hide();
            $('#buttonEditRelater').hide();
            $('#buttonEditStatus').hide();
            $('#buttonEditDeadline').hide();

            //an commentform
            $('#comment-form').hide();
            //  an status
            $('#status1').hide();
            $('#status2').hide();
            $('#status3').hide();
            $('#status7').hide();
            $('#status5').hide();
            $('#status6').hide();
            if (('{{Auth::id()}}' == '{{$request->create_by}}') || ((('{{Auth::user()->level}}' ==3) || ('{{Auth::user()->level}}' ==2 ) ) && (('{{$request->status}}' == 1) || ('{{$request->status}}' == 2) )))
                $("#buttonEditRelater").show();
            if((('{{Auth::user()->level}}' ==3) || ('{{Auth::user()->level}}' ==2 ) ) && (('{{$request->status}}' == 1) || ('{{$request->status}}' == 2) ))
            {
                $("#buttonEditAssigned").show();
                $("#buttonEditTeam").show();
                $("#buttonEditDeadline").show();
                $("#buttonEditRelater").show();
                $("#buttonEditAssigned").show();
            }

            //phân quyền cho thay đổi trạng thái
            if('{{Auth::id()}}' == '{{$request->create_by}}'){
                $('#buttonEditStatus').show();
                if('{{$request->status}}' == 1){
                    $('#status1').show();
                    $('#status6').show();
                }
                if('{{$request->status}}' == 2 ){
                    $('#status2').show();
                    $('#status6').show();
                }
                if('{{$request->status}}' == 3){
                    $('#status3').show();
                    $('#status5').show();
                    $('#status6').show();
                    $('#status7').show();
                }
                if('{{$request->status}}' == 5){
                    $('#status5').show();
                    $('#status6').show();
                    $('#status7').show();
                }
            }
            if('{{Auth::id()}}' == '{{$request->create_by}}'){
                $('#buttonEditStatus').show();
                if('{{$request->status}}' == 1){
                    $('#status1').show();
                    $('#status2').show();
                }
                if('{{$request->status}}' == 2){
                    $('#status2').show();
                    $('#status3').show();
                }
                if('{{$request->status}}' == 5){
                    $('#status2').show();
                    $('#status5').show();
                }
                if('{{$request->status}}' == 3){
                    $('#buttonEditStatus').hide();
                }
            }
            if('{{Auth::user()->level}}' == 2 ){
                $('#buttonEditStatus').show();
                if('{{$request->status}}' == 1){
                    $('#status1').show();
                    $('#status2').show();
                }
                if('{{$request->status}}' == 2){
                    $('#status2').show();
                    $('#status3').show();
                }
                if('{{$request->status}}' == 3){
                    $('#status3').show();
                    $('#status5').show();
                }
                if('{{$request->status}}' == 5){
                    $('#status2').show();
                    $('#status5').show();
                }
            }
            if('{{Auth::user()->level}}' == 3 ){
                $('#buttonEditStatus').show();
                if('{{$request->status}}' == 1){
                    $('#status1').show();
                    $('#status2').show();
                    $('#status6').show();
                }
                if('{{$request->status}}' == 2){
                    $('#status2').show();
                    $('#status3').show();
                    $('#status6').show();
                }
                if('{{$request->status}}' == 3){
                    $('#status3').show();
                    $('#status5').show();
                    $('#status6').show();
                    $('#status7').show();
                }
                if('{{$request->status}}' == 5){
                    $('#status2').show();
                    $('#status5').show();
                    $('#status6').show();
                    $('#status7').show();
                }
            }
            //hien thi comment
            if('{{Auth::id()}}' == '{{$request->create_by}}' || '{{Auth::id()}}' == '{{$request->assigned_to}}' || '{{Auth::user()->level}}' == 2 || '{{Auth::user()->level}}' == 3){
                $('#comment-form').show();
            }
        });

        $( "#assigned_to")
            .on("keydown", function (event) {
                if ( event.keyCode === 9 &&
                    $(this).autocomplete( "instance").menu.active ) {
                    event.preventDefault();
                }
            })
            .autocomplete({
                source: function( request, response ) {
                    $.getJSON( '{{url('search/autocomplete/assignTo/'.$request->id)}}', {
                        term: request.term
                    }, response );
                },
                focus: function() {
                    // prevent value inserted on focus
                    return false;
                },
                select: function( event, ui ) {
                    return true;
                }
            });

        $( "#relater")
            .on("keydown", function( event ) {
                //document.write("sdfasd");
                if ( event.keyCode === 9 &&
                    $(this).autocomplete( "instance" ).menu.active ) {
                    event.preventDefault();
                }
            })
            .autocomplete({
                source: function( request, response ) {
                    $.getJSON( '{{url('search/autocomplete/editRequest/'.$request->id)}}', {
                        term: request.term
                    }, response );
                },
                focus: function() {
                    // prevent value inserted on focus
                    return false;
                },
                select: function( event, ui ) {
                    var terms = this.value.split(/,\s*/);
                    // remove the current input
                    terms.pop();
                    // add the selected item
                    terms.push( ui.item.value );
                    // add placeholder to get the comma-and-space at the end
                    terms.push( "" );
                    this.value = terms.join( ", " );
                    return false;
                }
            });

        function editAll(){
            $('#buttonEditTeam').click();
            $('#buttonEditStatus').click();
            $('#buttonEditPri').click();
            $('#buttonEditRelater').click();
            $('#buttonEditDeadline').click();
            $('#buttonEditAssigned').click();
            $('#content').attr('readonly',false);
            $('#content').attr('placeholder',$('#content').val());
            $('#content').val('');
            $('#content').attr('required', true);
        }


        function edit(id){
            var edit = document.getElementById(id);
            $(edit).prev().hide();
            $(edit).show();
            $('#save').show();
            $('#cancel').show();
        };
        function cancel(){
            // an phan chinh sua
            if ($('#priority').is(":visible")){
                $('#priority').val($('#priority').prev().val());
                $('#priority').hide();
                $('#priority').prev().show();
            }

            if ($('#deadline').is(":visible")){
                $('#deadline').val($('#deadline').prev().val());
                $('#deadline').hide();
                $('#deadline').prev().show();
            }

            if ($('#team').is(":visible")){
                $('#team').val($('#team').prev().val());
                $('#team').hide();
                $('#team').prev().show();
            }

            if ($('#assigned_to').is(":visible")){
                $('#assigned_to').val($('#assigned_to').prev().val());
                $('#assigned_to').hide();
                $('#assigned_to').prev().show();
            }

            if ($('#relater').is(":visible")){
                $('#relater').val($('#relater').prev().val());
                $('#relater').hide();
                $('#relater').prev().show();
            }

            if ($('#status').is(":visible")){
                $('#status').val($('#status').prev().val());
                $('#status').hide();
                $('#status').prev().show();
            }
            if($('#content').is(':visible')){
                $('#content').val('{{$request->content}}');
             //   $('#status').disabled;
                $('#content').attr('readonly',true);
            }
            $('#save').hide();
            $('#cancel').hide();
        }
        function save(){
                var msg = "Ban da thay doi: \n";
               // $(infoEdit).html("Ban da thay doi:");
                if ($('#priority').is(":visible")){
                    var newPri = "";
                    switch ($('#priority').val()) {
                        case '1': {
                            newPri='{{env('priority.1')}}';
                            break;
                        }
                        case '2': {
                            newPri='{{env('priority.2')}}';
                            break;
                        }
                        case '3': {
                            newPri='{{env('priority.3')}}';
                            break;
                        }
                        case '4': {
                            newPri='{{env('priority.4')}}';
                            break;
                        }
                        default:{}
                    }
                    msg+="Muc do uu tien: "+($('#priority').prev().text().replace(/\r?\n|\r/g,'')).trim()+"->"+newPri+"\n";
                }
                if ($('#deadline').is(":visible")){
                    msg+="Deadline: "+($('#deadline').prev().text().replace(/\r?\n|\r/g,'')).trim()+"->"+$('#deadline').val()+"\n";
                }
                if ($('#team').is(":visible")){
                    msg+="Team: "+($('#team').prev().text().replace(/\r?\n|\r/g,'')).trim()+"->"+$('#team').val()+"\n";
                }
                if ($('#assigned_to').is(":visible")){
                    msg+="Assigned_to: "+($('#assigned_to').prev().text().replace(/\r?\n|\r/g,'')).trim()+"->"+$('#assigned_to').val()+"\n";
                }
                if ($('#relater').is(":visible")){
                    msg+="Nguoi lien quan: "+($('#relater').prev().text().replace(/\r?\n|\r/g,'')).trim()+"->"+$('#relater').val()+"\n";
                }
                var i = false;

                if ($('#status').is(":visible")){
                    var newStatus = "";
                    switch ($('#status').val()){
                        case '1':{
                            newStatus='{{env('status.1')}}';
                            break;
                        }
                        case '2':{
                            newStatus='{{env('status.2')}}';
                            break;
                        }
                        case '3':{
                            newStatus='{{env('status.3')}}';
                            break;
                        }
                        case '4':{
                            newStatus='{{env('status.4')}}';
                            break;
                        }
                        case '5':{
                            newStatus='{{env('status.5')}}';
                            break;
                        }
                        case '6':{
                            newStatus='{{env('status.6')}}';
                            break;
                        }
                        case '7':{
                            newStatus='{{env('status.7')}}';
                            // if (confirm("Bạn có hài lòng không?")){
                            //     newStatus = newStatus + "\n Hài lòng";
                            // }
                            // else
                            //     newStatus = newStatus + "\n Không hài lòng";
                            i = confirm("Bạn có hài lòng không?");
                            if (i == false)
                                newStatus = newStatus + "\n Không hài lòng";
                            break;
                        }
                        default:{}
                    }
                    msg+="Trạng thái: "+($('#status').prev().text().replace(/\r?\n|\r/g,'')).trim()+"->"+newStatus+"\n";
                }
                if (i == false) {
                    do{
                        var t = prompt(msg + "Comment");
                    }
                    while (t.trim() == '')
                }
                $('#commentEditForm').val(msg+"\nLý do:"+t);
                $('#editForm').submit();
        }
    </script>
@endsection