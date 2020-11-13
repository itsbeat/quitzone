<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationsToClassrooms extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //TODO aggiungi foreign per ogni tabella, una migrazione per tabella
        Schema::table('classrooms', function (Blueprint $table) {
            $table->bigInteger("course_id")->unsigned()->nullable();
            $table
                ->foreign("course_id")
                ->references("id")
                ->on("courses")
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
        Schema::table("classrooms", function (Blueprint $table) {
            $table->dropForeign(["course_id"]);
            $table->dropColumn(["course_id"]);
        });
    }
}
