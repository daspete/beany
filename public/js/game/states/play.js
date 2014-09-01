define([



], function(){

	var game = null;
	var nextState = null;

	var Play = {
		create: function(){
			console.log("PLAYING");
		},

		update: function(){

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