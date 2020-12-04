<?php

namespace App\Http\Controllers;

use App\Models\StudentInfo;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function createStudent(Request $request) {
        $studentData = json_decode($request->getContent());

        $request->validate([
            "name" => "required",
            "surname" => "required",
            "cf" => "required|unique:student_infos",
            "classroom_id" => "required"
        ]);

        $student = new StudentInfo();

        $student->name = $studentData->name;
        $student->surname = $studentData->surname;
        $student->cf = $studentData->cf;
        $student->classroom_id = $studentData->classroom_id;

        $student->save();
        
        return $student;
    }
}
