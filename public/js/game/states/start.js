define([

	"game/modules/gui/hud"

], function(HUD){

	var game = null;
	var nextState = null;
	var activationKey = null;

	var Start = {
		create: function(){
			HUD.createTitle("BEANY\nPRESS SPACE TO BEGIN");

			game.physics.startSystem(Phaser.Physics.ARCADE);

			game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.addOnce(function(){
				console.log("KEY");
				game.state.start(nextState);
			});
		}
	};

	return {
		init: function(_game, _nextState){
			game = _game;
			nextState = _nextState;
			console.log("START init");
		},
		getState: function(){
			return Start;
		}
	};

});