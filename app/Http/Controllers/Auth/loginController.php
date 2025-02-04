<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class loginController extends Controller
{

    

    public function login(request $request){
        $email = $request->email;
        $password =$request->password;

        $user=User::where('email' , $email )->first();

        if(Auth::attempt($user))   {

            return redirect()->route('/*');
        }else{
            return redirect()->route('login');
            }
    }

    public function logout(){
        Auth::logout();
        return redirect()->route('login');
    }

}
