<?php

use Illuminate\Database\Seeder;
use App\Team;

class TeamTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       // $this->call(Team);
        Team:: create(
         [
                'name' => 'IT Hà Nội'
            ],
            [
                'name' => 'IT Đà Nẵng'
            ]
        );

    }
}
