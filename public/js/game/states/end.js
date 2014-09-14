define([], function(){

	var game = null,
		nextState = null;

	var End = {

		create: function(){
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
			return End;
		}
	}

});