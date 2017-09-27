@section("fis_resource")@require('widget/layout/manageLayout.blade.php')@show<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="keywords" content="pumpkin blog"/>
    <meta name="description" content="pumpkin 微博">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0" />
    <title>pumpkin's blog</title>
    <link rel="icon" href="./favicon.ico" mce_href="./favicon.ico" type="image/x-icon">
    @framework('static/js/mod.js')
    @require('static/css/common.css')
    @placeholder('styles')
</head>
<body>
<div id="app">
    @yield("content")
</div>
@require('framework')
@placeholder('scripts')
</body>
</html>
