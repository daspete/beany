define([

	"game/modules/world/sky",
	"game/modules/gui/hud",
	"game/modules/player/player",
	"game/modules/world/platform"

], function(

	Sky,
	HUD,
	Player,
	Platform

){

	var game = null,
		nextState = null;

	var LoadState = {

		preload: function(){

			Sky.init(game);
			Sky.preload();

			HUD.init(game);

			Player.init(game);
			Player.preload();

			Platform.init(game);
			Platform.preload();

		},

		create: function(){
			game.state.start(nextState);
		}

	};

	return {
		init: function(_game,_nextState){
			game = _game;
			nextState = _nextState;
		},

		getState: function(){
			return LoadState;
		}
	};

});