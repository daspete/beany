<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function(){
	return View::make('game.layout');
});

Route::group(array("prefix" => "editor"), function(){
	
	Route::get("/", function(){
		return View::make("editor.layout");
	});

});

Route::group(array("prefix" => "api"), function(){

	Route::resource("levels", "LevelController");
	Route::resource("levels.platforms", "LevelPlatformController");
	Route::resource("platforms", "PlatformController");
	Route::resource("enemies", "EnemyController");
	Route::resource("items", "ItemController");

});