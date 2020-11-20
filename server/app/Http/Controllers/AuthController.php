<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request) {
        $credentials = request(["email","password"]);
        return Auth::attempt($credentials); 
    }

    public function logout() {
        
    }
}
