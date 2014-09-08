<?php

class LevelPlatformController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index($levelID)	{
		//
		return Response::json(array(
			"result" => Platforms::where("level","=", $levelID)->orderBy("id")->get(array("id", "type", "posX", "posY"))->toArray()
		));

	}

}
