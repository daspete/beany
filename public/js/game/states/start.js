define([

	"game/modules/gui/hud"

], function(

	HUD

){

	var game = null,
		nextState = null;

	var Start = {
		create: function(){
			HUD.createIntro("ZACK DIE BOHNE :)\nDRÜCKE DIE LEERTASTE");

			game.physics.startSystem(Phaser.Physics.ARCADE);
			game.physics.arcade.gravity.y = 981;

			game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.addOnce(function(){
				game.state.start(nextState);
			});
		}
	};

	return {
		init: function(_game, _nextState){
			game = _game;
			nextState = _nextState;
		},
		getState: function(){
			return Start;
		}
	}

});