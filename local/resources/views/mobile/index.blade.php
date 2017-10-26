@extends('widget/layout/mobileLayout.blade.php')

@require('static/mobile/index.css')

@section('title', 'mobile page')
@section('content')

<div class="container">
    <Vswiper>
        <Item class="item">
            <div>
                klsaldflkaf
            </div>
        </Item>
        <Item class="item">
            <div>
                klsaldflkaf
            </div>
        </Item>
        <Item class="item">
            <div>
                klsaldflkaf
            </div>
        </Item>
        <Item class="item">
            <div>
                klsaldflkaf
            </div>
        </Item>
    </Vswiper>
    <div class="music">
        <audio src="" autobuffer autoloop loop controls></audio>
    </div>
</div>


@script()

var pageConfig={

}
var index = require('static/mobile/index.es6');

@endscript

@endsection


@section("fis_resource")@parent @require('page/mobile/index.blade.php')@stop