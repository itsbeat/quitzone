<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\Bridge\AccessToken;

class AuthController extends Controller
{
    public function login(Request $request) {
        $credentials = request(["email","password"]);
         
        if (Auth::attempt($credentials)){
            
            $user = Auth::user();
            $token = $user->createToken("Personal Access Token")->accessToken;

            return response()
                ->json([
                    "logged_in_user" => $user
                ], 200)
                ->cookie(
                    "sessionToken", //nome
                    $token,         //variabile
                    1440,           //durata
                    false,          //path  
                    false,          //domain    
                    false,          //secure
                    true            //httpOnly

                );
        }
    }

    public function logout() {
        
    }
}