<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationsToAnswers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('answers', function (Blueprint $table) {
            $table->bigInteger("question_id")->unsigned()->nullable();
            $table
                ->foreign("question_id")
                ->references("id")
                ->on("questions")
                ->onDelete("cascade");
            $table->bigInteger("choice_id")->unsigned()->nullable();
            $table
                ->foreign("choice_id")
                ->references("id")
                ->on("choices")
                ->onDelete("cascade");
            $table->bigInteger("result_id")->unsigned()->nullable();
            $table
                ->foreign("result_id")
                ->references("id")
                ->on("results")
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
        Schema::table('answers', function (Blueprint $table) {
            $table->dropForeign("question_id");
            $table->dropColumn("question_id");

            $table->dropForeign("choice_id");
            $table->dropColumn("choice_id");

            $table->dropForeign("result_id");
            $table->dropColumn("result_id");
        });
    }
}
