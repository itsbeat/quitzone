<?php

namespace App\Http\Controllers;

use App\Models\Classroom;
use App\Models\StudentInfo;
use Illuminate\Http\Request;

class ClassroomController extends Controller
{
    public function list() {
        return Classroom::get();
    }

    public function getStudents($id) {
        return StudentInfo::where("classroom_id", $id)->get();
    }

    public function createClassroom(Request $request) {
        $classroomData = json_decode($request->getContent());

        $request->validate([
            "name" => "required|unique:classrooms",
        ]);

        $classroom = new Classroom();

        $classroom->name = $classroomData->name;

        $classroom->save();

        return $classroom;
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
}
