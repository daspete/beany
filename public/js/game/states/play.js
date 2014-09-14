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


	var Play = {
		create: function(){
			game.physics.startSystem(Phaser.Physics.ARCADE);

			Sky.create();

			HUD.create(3,50,0);

			Player.create();

			Platform.create();

			Platform.add();
		},

		update: function(){
			Sky.update();
			Player.update(Platform.getPlatforms());
			Platform.update();
		}
	};

	return {

		init: function(_game, _nextState){
			game = _game;
			nextState = _nextState;
		},

		getState: function(){
			return Play;
		}

	}

});