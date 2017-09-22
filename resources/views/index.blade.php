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

<form ref="form" id="form" action="/imageupload" method="post" enctype="multipart/form-data">
            <input type="hidden" name="_token" value="{{ Session::token() }}" v-model="token">
            <pre>lakdjf</pre>
            <div>
                <input type="file" multiple="true" name="file" @change="imgChange">
            </div>
            <div>
                <button type="submit">Upload!</button>
            </div>
        </form>


        <button @click="postfile">ajax上传文件</button>

@script()

var pageConfig={
    data:<?php echo json_encode($data); ?>,
    token:"{{ Session::token() }}",
}
var index = require('static/index/index');

@endscript

@endsection


@section("fis_resource")@parent @require('page/index.blade.php')@stop