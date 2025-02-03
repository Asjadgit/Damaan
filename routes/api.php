<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestingController;



Route::get('data',[TestingController::class,'login']);

Route::post('login',[TestingController::class,'login'])->name('login');

Route::get('logout',[TestingController::class,'logout'])->name('logout');

