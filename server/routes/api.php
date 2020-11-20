<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SurveyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::post("/login",[AuthController::class,"login"]);

Route::group(["middleware"=> "auth.api"],function(){
    Route::post("/logout",[AuthController::class,"logout"]);
    Route::get("/surveys", [SurveyController::class, "list"]);
    Route::post("/surveys", [SurveyController::class, "create"]);
});