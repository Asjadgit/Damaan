<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TestingController extends Controller
{
   
    public function login(request $request){
      
        $user = $request ->validate([
            "email"=>"email|required",
            "password"=>"required"
        ]);
        if(Auth::attempt($user)){
            return redirect()->route('dashboard');
        }else{
            return redirect()->route('login');
        }
        
       
    }

    public function logout(){
        Auth::logout();
        return redirect()->route('login');
    }

  

    
}
