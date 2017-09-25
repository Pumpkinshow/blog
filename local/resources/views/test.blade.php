@extends('widget/layout/layout.blade.php')

@section('title', '欢迎使用 fis3 + laravel 解决方案')
@section('content')

<div class="container">
  <div class="page-header">
    <h2>
      这是一个阿克苏加的了房间拉斯科技的了房价艾丝凡劣质
    </h2>
  </div>

  <button class="btn btn-primary btn-duang">Duang</button>
</div>

@script()
var pageConfig = {
    data: "{{$data or ''}}",  
};
var index = require('static/main/test');
<!-- index('.btn-duang'); -->
@endscript

@endsection


@section("fis_resource")@parent @require('page/test.blade.php')@stop