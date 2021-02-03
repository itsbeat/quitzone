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

    public function edit($id){
        return StudentInfo::find($id);
    }
    public function editStudent(Request $request) {
        $StudentData = json_decode($request->getContent());

        $request->validate([
            "name" => "required",
            "surname" => "required",
            "cf" => "required",
        ]);

        $student = StudentInfo::find($StudentData->id);

        $student->name = $StudentData->name;
        $student->surname = $StudentData->surname;
        $student->cf = $StudentData->cf;

        $student->save();

        return $student;
    }
    public function deleteStudent($id){
        StudentInfo::destroy($id);

    }
}
