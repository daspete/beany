define([



], function(){

	var game = null;
	var sky = null;

	var Sky = {
		init: function(_game, _level, _mode){
			game = _game;
		},
		preload: function(){
			game.load.image("sky", "assets/images/backgrounds/sky.jpg");
		},
		create: function(){
			sky = game.add.tileSprite(0,0,800,400, "sky");
		},
		update: function(){
			sky.tilePosition.y += 2;
		}
	};

	return Sky;

});