<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClassroomController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\UserController;
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
Route::post("/users", [UserController::class, "create"]);

Route::get("/users", [UserController::class, "list"]);
Route::get("/users/{id}", [UserController::class, "getUser"]);
Route::put("/users/{id}", [UserController::class, "editUser"]);

Route::get("/classrooms", [ClassroomController::class, "list"]);
Route::get("/classrooms/{id}", [ClassroomController::class, "show"]);
Route::get("/classrooms/change/{id}", [ClassroomController::class, "edit"]);
Route::post("/classrooms/add", [ClassroomController::class, "createClassroom"]);
Route::put("/classrooms/edit", [ClassroomController::class, "editClassroom"]);
Route::delete("/classrooms/delete/{id}", [ClassroomController::class, "deleteClassroom"]);

Route::post("/students/add", [StudentController::class, "createStudent"]);
Route::get("/students/change/{id}", [StudentController::class, "edit"]);
Route::put("/students/edit", [StudentController::class, "editStudent"]);
Route::delete("/students/delete/{id}", [StudentController::class, "deleteStudent"]);



Route::group(["middleware"=> "auth.api"],function(){
    Route::post("/logout",[AuthController::class,"logout"]);
    Route::get("/surveys", [SurveyController::class, "list"]);
    Route::post("/surveys", [SurveyController::class, "create"]);
});

