<?php

namespace App\Http\Controllers;

use App\Models\Classroom;
use Illuminate\Http\Request;

class ClassroomController extends Controller
{
    public function list() {
        return Classroom::get();
    }

    public function show($id) {
        return Classroom::with(["students"])->find($id);
    }

    public function createClassroom(Request $request) {
        $classroomData = json_decode($request->getContent());

        $request->validate([
            "name" => "required",
        ]);

        $classroom = new Classroom();

        $classroom->name = $classroomData->name;

        $classroom->save();

        return $classroom;
    }

    public function edit($id){
        return Classroom::find($id);
    }

    public function editClassroom(Request $request) {
        $classroomData = json_decode($request->getContent());

        $request->validate([
            "name" => "required",
        ]);

        $classroom = Classroom::find($classroomData->id);

        $classroom->name = $classroomData->name;

        $classroom->save();

        return $classroom;
    }

    public function deleteClassroom($id){
        Classroom::destroy($id);

    }
}
