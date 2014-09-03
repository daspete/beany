<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateGameSettingsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('gameSettings', function(Blueprint $table)
		{
			$table->increments('id');

			$table->string("appName", 80);
			$table->integer("canvasWidth");
			$table->integer("canvasHeight");
			$table->integer("gameLevel");
			$table->float("gameSpeed");
			$table->float("gameLevelMultiplier");
			$table->boolean("active")->default(true);
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('gameSettings');
	}

}
