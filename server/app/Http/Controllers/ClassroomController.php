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
}
