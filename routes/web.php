<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/{PathMatch}',function(){
    return view('welcome');

})->where('PathMatch',".*");
