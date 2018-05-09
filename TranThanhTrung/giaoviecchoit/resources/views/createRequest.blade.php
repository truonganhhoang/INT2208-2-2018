@extends('layout')
@section('child_head')
    <link rel="stylesheet" href="{{asset('css/bootstrap.css')}}">
    <link rel="stylesheet" href={{ asset('css/ajax/libs/jqueryui/jquery-ui.css') }}>
    <script src= {{ asset('js/ajax/libs/jquery/jquery.min.js') }}></script>
    <script src= {{ asset('js/ajax/libs/jqueryui/jquery-ui.min.js') }}></script>

@endsection
@section('child_content')
    <div id='contentRequest' class="panel panel-default" style="margin-top: 5%">
        <div class="panel panel-heading">
        <label class = "control-label h4" >Thêm yêu cầu</label>
        </div>
        <div class="panel panel-body">
        <div class="col-md-12">
            <form margin=3% method="post" id="requestForm" action="{{ route('createRequest') }}" enctype="multipart/form-data">
                {{ csrf_field() }}
                <div class="row">
                    <div class="form-group col-md-12">
                        <label for ='title' id="title" class="control-label">Tên công việc</label>
                        <input type="text" name="title" id ="title" class="form-control" placeholder="Tên công việc" required autofocus>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                        <label for ='priority' id="priority" class="control-label">Mức độ ưu tiên</label>
                        <select class="form-control" id="priority" name="priority">
                            <option value="1">Thấp</option>
                            <option value="2">Bình thường</option>
                            <option value="3">Cao</option>
                            <option value="4">Khẩn cấp</option>
                        </select>
                    </div>

                    <div class="form-group col-md-6">
                        <label for ='deadline' id="deadline_label" class="control-label">Ngày hết hạn</label>
                        {{--<input type="text" name="name" id ="deadline" class="form-control">--}}
                        <input id="deadline" type= 'date' name="deadline" class="form-control" required autofocus />

                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                        <label for ='team' class="control-label">Bộ phận IT</label>
                        <select class="form-control" id="team" name="team">
                            <?php
                                foreach($teams as $team){
                            ?>
                            <option value="{{ $team->id }}"> {{ $team->name }} </option>
                            <?php
                                }
                            ?>

                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for ='relater' class="control-label">Người liên quan</label>
                        <input type="text" name="relater" id ="relater" class="form-control" autofocus>
                    </div>
                </div>

                <div >
                        <label class="control-label">Nội dung</label>
                        {{--<div class="'form-group col-md-12">--}}
                            <textarea type="text" row="10" class="form-control" name="content" required  ></textarea>
                        {{--</div>--}}
                </div>
                <div class="row" style="padding-top:5px">
                    <div class="form-group col-md-12">
                    <label class="control-label">Chọn ảnh cho công việc</label>
                    <input type="file" name="file[]" multiple>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-6 col-md-offset-4">
                        <button type="submit" class="btn btn-primary">
                            Submit
                        </button>
                        <button type="button" class="btn btn-primary">
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    </div>
    <script type="text/javascript">
        $( "#relater")
            .on("keydown", function( event ) {
                if ( event.keyCode === 9 &&
                    $(this).autocomplete( "instance" ).menu.active ) {
                    event.preventDefault();
                }
            })
            .autocomplete({
                source: function( request, response ) {
                    $.getJSON( "{{url('search/autocomplete/createRequest/0')}}", {
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
    </script>
@endsection
@section('script')
    <script type="text/javascript">
        $(document).ready(function() {
         //   event.preventDefault();
            function submit() {
                $("#requestForm").submit();
            }
        });
    </script>
@endsection