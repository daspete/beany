<?php

class PlatformController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index(){
		if(Input::has("levelID")){
			return Response::json(array(
				"result" => Platforms::where("level","=",Input::get("levelID"))
								->orderBy("id")
								->get(array("id", "type", "posX", "posY"))
								->toArray()
			));
		}
	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id) {
		//
	}

	/**
	 * Store the specified resource in storage.
	 *
	 * @return Response
	 */
	public function store()	{
		//
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$platform = new Platforms;

		$platform->type = Input::get("type");
		$platform->posX = Input::get("posX");
		$platform->posY = Input::get("posY");
		$platform->level = Input::get("level");

		$platform->save();

		return Response::json(array(
			"id" => $platform->id
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
		$platform = Platforms::where("id", "=", $id)->first()->delete();
	}


}
