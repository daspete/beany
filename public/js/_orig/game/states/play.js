define([

	"game/modules/backgrounds/sky",
	"game/modules/gui/hud",
	"game/modules/player/player",
	"game/modules/world/platform"

], function(Sky, HUD, Player, Platform){

	var game = null;
	var settings = null;
	var nextState = null;

	var Play = {
		create: function(){
			game.physics.startSystem(Phaser.Physics.ARCADE);

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

			Platform.create();
			Platform.add();
			game.time.events.loop(2000, Platform.add, this);

		},

		update: function(){
			Sky.update();
			Player.update(Platform.getPlatforms());
			Platform.update();
		}
	};

	return {
		init: function(_game, _settings, _nextState){
			game = _game;
			settings = _settings;
			nextState = _nextState;
		},
		getState: function(){
			return Play;
		}
	};
});