@extends('widget/layout/manageLayout.blade.php')

@require('static/manage/login.css')

@section('title', 'login')
@section('content')

<div class="content">
  <div class="login">
    <ul>
      <li class="title"><p>management system</p></li>
      <li class="username"><input type="text" name="username" placeholder="username"></li>
      <li class="password"><input type="password" name="password" placeholder="password"></li>
      <li class="remenber"><input type="checkbox" name="remenber" placeholder="username">remenber me!</li>
      <li class="login"><a id="login" @click="login" href="javascript:void(0);" >login</a></li>
    </ul>
  </div>
</div>

@script()

var pageConfig = {

}
var index = require('static/manage/login.es6');

@endscript

@endsection


@section("fis_resource")@parent @require('page/manage/login.blade.php')@stop