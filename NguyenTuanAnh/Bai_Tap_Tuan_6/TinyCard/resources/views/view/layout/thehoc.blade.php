@extends('view.layout.index')
@section('content')

<div class="container">
    <div class="row">
        <div class="col-12 col-md-12 wrapper mt-md-5 mb-5 bg-white" style="height: 100vh;">
            <div class="row">
            </div>
            <div class="row">
                <div class="title col-8 col-md-3 mx-auto mt-5 text-center text-warning h4 font-weight-bold">New Card</div>
            </div>
            <div class="row">
                <div id="card" class="col-8 col-md-3 mx-auto mt-4 rounded pointer pl-0 pr-0" style="height: 300px;">
                    <div class="front">
                        <img src="img/{{$thehoc->hinhanh}}" alt="Chelsea" class="rounded w-100 h-100" style="">
                    </div>
                    <div class="back text-center text-white font-weight-bold h4 bg-warning rounded pt-5">
                        <div class="w-100 pt-2"></div>
                        <span class="align-middel pt-5 d-block">{{$thehoc->tienganh}}</span>
                    </div>
                </div>
            </div>
            <div class="row d-none" id="btn-continue">
                <div class="continue col-8 col-md-3 mx-auto mt-4 pt-1">
                    <button class="w-100 bg-primary text-white text-uppercase font-weight-bold rounded pt-2 pb-2 pointer">Continue</button>
                </div>
            </div>
            <div class="row" id="flip">
                <div class="how-to-flip col-8 col-md-3 mx-auto mt-5 mt-md-3 text-center text-secondary font-weight-bold h4">
                    Click card to flip
                </div>
            </div>
        </div>
    </div>
</div>
@endsection