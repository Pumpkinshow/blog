@extends('widget/layout/layout.blade.php')
<style>
*{
    margin:0;
    padding: 0;
}
    html{
        font-size: 100px;
    }
    .container{

    }
    .top{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #e1e1e1;
    }   
    .top li{
        list-style:none;
        float: left;
        height: 0.84rem;
        width: 25%;
        font-size: 0.62rem;
        text-align: center;
    }
</style>

@section('title', '欢迎使用 fis3 + laravel 解决方案')
@section('content')

<div class="container">
  <ul class="top">
      <li @click="show(1)">1</li>
      <li @click="show(2)">1</li>
      <li @click="show(3)">1</li>
      <li @click="show(4)">1</li>
  </ul>

  <div>
        <p style="height:100px;"></p>
      <div>
          <ul v-show="a==1">
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
              <li>列表1</li>
          </ul>
          <ul v-show="a==2">
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
                <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
              <li>列表2</li>
          </ul>
          <ul v-show="a==3">
              <li>列表3</li>
              <li>列表3</li>
              <li>列表3</li>
              <li>列表3</li>
              <li>列表3</li>
              <li>列表3</li>
              <li>列表3</li>
              <li>列表3</li>
              <li>列表3</li>
              <li>列表3</li>
              <li>列表3</li>
              <li>列表3</li>
              <li>列表3</li>
              <li>列表3</li>
              <li>列表3</li>
              <li>列表3</li>
              <li>列表3</li>
              <li>列表3</li>
              <li>列表3</li>
              <li>列表3</li>
          </ul>
      </div>
  </div>
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