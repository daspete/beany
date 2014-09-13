<?php

class LevelController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index(){
		
		return Response::json(array(
			"result" => Level::orderBy("id")->get(array("id", "name","width","height"))->toArray()
		));

	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id){
		return Response::json(array(
			"result" => Level::where("id","=",$id)->get(array("id", "name","width","height"))->toArray()
		));
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		if($id != 0){
			$level = Level::where("id","=", $id)->first();
		}else{
			$level = new Level;	
		}
		//
		
		$level->name = Input::get("name");
		$level->width = Input::get("width");
		$level->height = Input::get("height");
		$level->save();

		return Response::json(array(
			"id" => $level->id
		));

	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}


}
