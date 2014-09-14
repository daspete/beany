define([

	"jquery",
	"backbone",
	"collections/platforms"

], function(

	$,
	Backbone,
	PlatformCollection

){

	var game = null,
		platformCollection = null,
		platforms = null;

	var Platform = {

		init: function(_game){
			game = _game;
		},

		preload: function(){
			game.load.spritesheet("platform", "assets/images/world/platformTypeMap.png", 64,64);

			platformCollection = new PlatformCollection();
			platformCollection.fetch({
				data: $.param({
					"levelID": "35"
				}),
				success: function(){

				}
			});
		},

		create: function(){
			platforms = game.add.group();
			platforms.enableBody = true;
		},

		add: function(){
			platformCollection.each(function(platform){
				var posX = parseInt(platform.get("posX")) * 50;
				var posY = parseInt(platform.get("posY")) * 50;

				game.add.sprite(posX, posY - platforms.position.y, "platform", 0, platforms);
			});

			platforms.setAll("body.immovable", true);
		},

		getPlatforms: function(){
			return platforms;
		},

		update: function(){
			platforms.position.y += 0.5;
		}

	};

	return Platform;


});