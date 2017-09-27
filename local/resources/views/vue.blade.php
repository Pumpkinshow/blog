@extends('widget/layout/layout.blade.php')

@require('static/css/common.css')

@section('title', '欢迎使用 fis3 + laravel 解决方案')
@section('content')

<div class="container" id="app">
  asdfafasfsf
</div>




@script()
var pageConfig={
    data:<?php echo json_encode($users); ?>
}
var index = require('static/main/main');
<!-- index('.btn-duang'); -->
@endscript

@endsection


@section("fis_resource")@parent @require('page/vue.blade.php')@stop