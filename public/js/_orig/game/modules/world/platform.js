define([



], function(){
	
	var game = null,
		platforms = null;

	var Platform = {
		init: function(_game){
			game = _game;
		},
		preload: function(){
			game.load.image("platform", "assets/images/world/box.png");
		},
		create: function(){
			platforms = game.add.group();
			platforms.enableBody = true;
		},
		update: function(){
			platforms.position.y += 0.5;
		},
		add: function(){
			var _width = game.rnd.integerInRange(2, 7);  
			var _posX = game.rnd.integerInRange(0, 20) * 30;
			var _posY = -40;
			
			for(var x = _posX; x < _posX + _width * 30; x += 30){
				game.add.sprite(x,_posY-platforms.position.y,"platform", 0, platforms);	
			}
			
			platforms.setAll("body.immovable", true);
		},
		getPlatforms: function(){
			return platforms;
		}
	};

	return Platform;
});