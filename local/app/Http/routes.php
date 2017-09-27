<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/welcome', function () {
    return view('welcome');
});
Route::group(['namespace' => 'Manage'], function() {
   Route::get("/login", "LoginController@login");
});
Route::group(["prefix" => "manage",'namespace' => 'Manage'], function() {
   // Route::get("/login", "LoginController@login");
});

Route::get('index1', "FisController@index");
Route::get('test', "FisController@test");
Route::get('vue', "FisController@vue");

Route::any('imageupload', "FisController@imgUpload");