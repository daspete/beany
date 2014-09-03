define([

	"game/modules/backgrounds/sky",
	"game/modules/gui/hud",
	"game/modules/player/player"

], function(Sky, HUD, Player){

	var game = null;
	var nextState = null;

	var Play = {
		create: function(){
			console.log("PLAYING");

			var playerSettings = {
				health: 100,
				lives: 3,
				score: 0
			};

			Sky.create();
			HUD.create(
				playerSettings.health,
				playerSettings.score,
				playerSettings.lives
			);
			Player.create(playerSettings);
		},

		update: function(){
			Sky.update();
			Player.update();
		}
	};

	return {
		init: function(_game, _nextState){
			game = _game;
			nextState = _nextState;

			console.log("PLAY init");
		},
		getState: function(){
			return Play;
		}
	};
});