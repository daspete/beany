define([],function(){

	var game = null,
		sky = null;

	var Sky = {
	
		init: function(_game){
			game = _game;
		},

		preload: function(){
			game.load.image("sky", "assets/images/backgrounds/sky.jpg");
		},

		create: function(){
			sky = game.add.tileSprite(0,0,800,500,"sky");
		},

		update: function(){
			sky.tilePosition.y += 0.3;
		}

	};

	return Sky;

});