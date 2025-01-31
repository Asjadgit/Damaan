<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class TestingController extends Controller
{
   
    public function login(){
        $user = User::all();
        return response()->json($user);
    }

    
}
