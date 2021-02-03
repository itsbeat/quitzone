<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentInfo extends Model
{
    use HasFactory;

    /**
     * get the user associated with the user
     */
    public function user() {
        return $this->hasOne(User::class);
    }
}
