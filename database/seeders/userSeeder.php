<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class userSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $roles =['admin','superAdmin'];
        // for($i =0 ;$i <= 1 ; $i++){
        //     Role::create([

        //         "name"=>$roles[$i]               
        //     ]);
        // }
        

            $user= User::create([

                    'name'=> 'Rizwan',
                    'password'=> Hash::make(12345678) ,
                    'email'=> 'admin@gmail.com',
                
                ]);

                $user->assignRole("admin");
      
        
    }
}
