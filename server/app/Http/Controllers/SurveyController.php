<?php

namespace App\Http\Controllers;

use App\Models\Choice;
use App\Models\Question;
use App\Models\Survey;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SurveyController extends Controller
{
    public function list() {
        return Survey::with([
            "questions",
            "questions.choices"
        ])->get();
    }

    public function create(Request $req) {
        $params = json_decode($req->getContent(), true);

        $survey = new Survey();
        $survey->name = $params['name'];
        $survey->save();

        foreach ($params['questions'] as $questionData) {
            $question = new Question();

            $question->text = $questionData['text'];
            $question->survey()->associate($survey);

            $question->save();

            foreach ($questionData['choices'] as $choiceData) {
                $choice = new Choice();

                $choice->text = $choiceData['text'];
                $choice->question()->associate($question);

                $choice->save();
            }
        }

        return Survey::where("id", $survey->id)->with([
            "questions",
            "questions.choices",
        ])->first();
    }
}
