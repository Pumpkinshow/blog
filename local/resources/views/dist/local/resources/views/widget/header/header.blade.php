<!-- Fixed navbar -->
<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
  <div class="container">
    <ul class="nav navbar-nav">
      <li @if( Request::is('/') )class="active"@endif>
        <a href="{{ url('/') }}">首页</a>
      </li>

      <li @if( Request::is('about') )class="active"@endif>
        <a href="{{ url('/about') }}">关于</a>
      </li>
    </ul>
  </div>
</div>

<!-- @script()
var init = require('./header');
init();
@endscript -->
@section("fis_resource")@parent @require('widget/header/header.blade.php')@stop@section("fis_resource")@parent @require('dist/local/resources/views/widget/header/header.blade.php')@stop