<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    public function list() {
        return Survey::with([
            "questions",
            "questions.choices"
        ])->get();
    }
}
