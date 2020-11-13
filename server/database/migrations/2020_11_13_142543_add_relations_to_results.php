<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationsToResults extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('results', function (Blueprint $table) {
            $table->bigInteger("survey_id")->unsigned()->nullable();
            $table
                ->foreign("survey_id")
                ->references("id")
                ->on("surveys")
                ->onDelete("cascade");
            $table->bigInteger("student_id")->unsigned()->nullable();
            $table
                ->foreign("student_id")
                ->references("id")
                ->on("choices")
                ->onDelete("cascade");
            $table->bigInteger("exam_id")->unsigned()->nullable();
            $table
                ->foreign("exam_id")
                ->references("id")
                ->on("exams")
                ->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('results', function (Blueprint $table) {
            $table->dropForeign("survey_id");
            $table->dropColumn("survey_id");

            $table->dropForeign("student_id");
            $table->dropColumn("student_id");

            $table->dropForeign("exam_id");
            $table->dropColumn("exam_id");
        });
    }
}
