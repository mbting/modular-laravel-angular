<?php

use Illuminate\Database\Seeder;

class userstableseeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new \App\Models\User();
        $user->username = 'admin';
        $user->password= \Illuminate\Support\Facades\Hash::make('admin');
        $user->save();
    }
}
