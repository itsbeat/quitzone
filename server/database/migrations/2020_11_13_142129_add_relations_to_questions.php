<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationsToQuestions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('questions', function (Blueprint $table) {
            $table->bigInteger("type_id")->unsigned()->nullable();
            $table
                ->foreign("type_id")
                ->references("id")
                ->on("types")
                ->onDelete("cascade");
            $table->bigInteger("survey_id")->unsigned()->nullable();
            $table
                ->foreign("survey_id")
                ->references("id")
                ->on("surveys")
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
        Schema::table('questions', function (Blueprint $table) {
            $table->dropForeign("type_id");
            $table->dropColumn("type_id");

            $table->dropForeign("survey_id");
            $table->dropColumn("survey_id");
        });
    }
}
