@extends('widget/layout/mobileLayout.blade.php')

@require('static/mobile/index.css')

@section('title', 'mobile page')
@section('content')

<div class="container">
    <Vswiper :source="imgs">
        
    <Item>lkajsldfljadlkfj</Item>
    <Item>lkajsldfljadlkfj</Item>
    <Item>lkajsldfljadlkfj</Item>
    <Item>lkajsldfljadlkfj</Item>
    <Item>lkajsldfljadlkfj</Item>

    </Vswiper>
</div>


@script()

var pageConfig={

}
var index = require('static/mobile/index.es6');

@endscript

@endsection


@section("fis_resource")@parent @require('page/mobile/index.blade.php')@stop