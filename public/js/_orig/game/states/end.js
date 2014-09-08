define([



], function(){

	var game = null;
	var settings = null;
	var nextState = null;

	var End = {
		create: function(){
			game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.addOnce(function(){
				game.state.start(nextState);
			});
		}
	};

	return {
		init: function(_game, _settings, _nextState){
			game = _game;
			settings = _settings;
			nextState = _nextState;
		},
		getState: function(){
			return End;
		}
	};
});