define([



], function(){

	var game = null;
	var nextStage = null;

	var Load = {
		preload: function(){

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