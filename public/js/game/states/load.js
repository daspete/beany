define([

	"game/modules/backgrounds/sky",
	"game/modules/gui/hud",
	"game/modules/player/player"

], function(Sky, HUD, Player){

	var game = null;
	var nextStage = null;

	var Load = {
		preload: function(){
			Sky.init(game,0,"easy");
			Sky.preload();

			HUD.init(game);

			Player.init(game);
			Player.preload();
		},

		create: function(){
			game.state.start(nextStage);
		}
	};

	return {
		init: function(_game, _nextStage){
			game = _game;
			nextStage = _nextStage;

			console.log("LOAD init");
		},

		getState: function(){
			return Load;
		}
	};
});