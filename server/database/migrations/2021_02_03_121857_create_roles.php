<?php

use App\Models\Role;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $role = new Role();
        $role->name = 'admin';
        $role->code = 'admin';
        $role->color = '#00FF00';
        $role->save();

        $role1 = new Role();
        $role1->name = 'student';
        $role1->code = 'student';
        $role1->color = '#00AEEF';
        $role1->save();

        $role2 = new Role();
        $role2->name = 'teacher';
        $role2->code = 'teacher';
        $role2->color = '#DC143C';
        $role2->save();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

    }
}
