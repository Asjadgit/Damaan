<?php

use Illuminate\Http\Request;
use App\Http\Middleware\UserAuth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestingController;
use App\Http\Controllers\Auth\loginController;


//login Auth Routes 

Route::post('login',[loginController::class ,'login']);

Route::get('data',[loginController::class,'login']);

// Route::post('login',[loginController::class,'login'])->name('login');

Route::get('loginPage',[loginController::class,'loginPage'])->name('loginPage');

Route::get('logout',[loginController::class,'logout'])->name('logout');

// Route::middleware([UserAuth::class])->group(function(){
// });




