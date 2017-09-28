@extends('widget/layout/mobileLayout.blade.php')

@section('title', 'mobile page')
@section('content')

<div class="container">
  <div class="page-header">
    <h2>
      栗子1111dsaf  sss
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

}
var index = require('static/mobile/index.es6');

@endscript

@endsection


@section("fis_resource")@parent @require('page/mobile/index.blade.php')@stop