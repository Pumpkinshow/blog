@extends('widget/layout/front.blade.php')

@section('title', '欢迎使用 fis3 + laravel 解决方案')
@section('content')

<div class="container">
  <div class="page-header">
    <h2>
      栗子
    </h2>
  </div>

  <button class="btn btn-primary btn-duang">Duang</button>
</div>

@script()

var pageConfig={
    data:<?php echo json_encode($data); ?>
}
var index = require('page/index');
<!-- index('.btn-duang'); -->
@endscript

@endsection


@section("fis_resource")@parent @require('page/index.blade.php')@stop