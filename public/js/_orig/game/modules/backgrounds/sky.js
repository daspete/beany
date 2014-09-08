define([



], function(){

	var game = null;
	var settings = null;
	var sky = null;

	var Sky = {
		init: function(_game, _settings){
			game = _game;
			settings = _settings;
		},
		preload: function(){
			game.load.image("sky", "assets/images/backgrounds/sky.jpg");
		},
		create: function(){
			sky = game.add.tileSprite(0,0,settings.get("canvasWidth"),settings.get("canvasHeight"), "sky");
		},
		update: function(){
			sky.tilePosition.y += 0.3;
		}
	};

	return Sky;
});