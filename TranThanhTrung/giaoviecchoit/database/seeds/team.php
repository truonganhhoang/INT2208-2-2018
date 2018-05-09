<?php
//use App\Team;
use Illuminate\Database\Seeder;
//use App\Team;

class team extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(\App\Team);
        App\Team::create(
            [
                'name' => 'IT Hà Nội'
            ],
            [
                'name' => 'IT Đà Nẵng'
            ]
        );

    }
}
