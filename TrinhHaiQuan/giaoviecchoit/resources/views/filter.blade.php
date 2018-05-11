@extends('layout')
@section('child_content')
    <div class="panel panel-default" style="margin-top: 5%">
        <div class="panel panel-heading">
            <label class="h4 col-md-10">Danh sách công việc</label>
            <div class="btn-toolbar ">
            <a href="{{url("reload")}}">
            <button type="button" class="btn btn-primary  " title="Reset bộ lọc">
                <span class="glyphicon glyphicon-refresh">
                </span></button>
            </a>
            {{--<button type="button" class="btn btn-primary " title="Tìm kiếm"><span class="glyphicon glyphicon-search"></span></button>--}}
            </div>
            </div>
        <div class="panel panel-body">
            <table class="table">
                <thead>
                    <tr>
                            <th col-md-1>STT</th>
                            <th col-md-5>Tên công việc</th>
                            <th col-md-2>Mức độ ưu tiên</th>
                            <th>Người yêu cầu</th>
                            <th>Người thực hiện</th>
                            <th>Bộ phận IT</th>
                            <th>Ngày hết hạn</th>
                            <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                    <?php
                        $stt = 1;
                        foreach ($requests as $request){
                    ?>
                        <tr>
                            <th>
                                {{--// tao them neu chua doc thi danh dau--}}
                                {{--@if()--}}
                                <span style="color: #c9302c ; font-weight: bold">{{$reads[$stt - 1]}}</span>
                                <span> <?php echo($stt++); ?></span>
                            </th>

                            <th>
                                <a href="{{ url('editRequest/'.$request->id) }}"> {{$request->title}} </a>
                            </th>

                            <th>
                                <label> {{ env('priority.' . $request->priority)}} </label>
                            </th>

                            <th>
                                <a> {{$request['relations']['create_by']->name}} </a>
                            </th>

                            <th>
                                <a> {{$request['relations']['assign_to'] == null ? '' : $request['relations']['assign_to']->name}} </a>
                            </th>

                            <th>
                                <label> {{$request['relations']['team']->name}} </label>
                            </th>

                            <th>
                                <label> {{$request->deadline}} </label>
                            </th>

                            <th>
                                <label> {{ env('status.' . $request->status) }} </label>
                            </th>

                        </tr>
                    <?php } ?>
                </tbody>
            </table>
<!--            -->
{{--//                if (get_class($requests) != "Illuminate\Database\Eloquent\Collection")--}}
                    {{ $requests->render() }}
{{--//                    echo $requests->links();--}}
                {{--?>--}}
        </div>

    </div>
@endsection