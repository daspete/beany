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

Route::get('/', function()
{
	return View::make('layout');
});

Route::group(array("prefix" => "get"), function(){
	Route::get("game", function(){
		return Response::json(array(
			"result" => Gamesettings::where("active", "=", true)
							->first(array(
								"appName",
								"canvasWidth",
								"canvasHeight",
								"gameLevel",
								"gameSpeed",
								"gameLevelMultiplier"
							))->toArray()
		));
	});

	Route::get("platforms", function(){
		
	});
});

Route::group(array("prefix" => "api"), function(){
	Route::get("platform", function(){
		return Response::json(array(
			"result" => Platforms::where("active", "=", true)
							->get(array(
								"id",
								"type",
								"posX",
								"posY"
							))->toArray()
		));
	});

	Route::delete("platform/{id}", function($id){
		$platform = Platforms::find($id);
		$platform->active = false;
		$platform->save();
	});
});


Route::group(array("prefix" => "editor"), function(){
	Route::get("/", function(){
		return View::make("editor.layout");
	});
});