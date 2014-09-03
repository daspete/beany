define([

	"game/modules/gui/hud"

], function(HUD){

	var game = null,
		health = null,
		lives = null,
		score = null,
		beany = null,
		cursors = null;
		jumpButton = null;
		jumpTimer = null;
		facing = null;

	var Player = {
		init: function(_game){
			game = _game;
		},
		preload: function(){
			game.load.spritesheet("beany", "assets/images/player/beanySprite.png", 36,50);
		},
		create: function(settings){
			beany = game.add.sprite(32,50,"beany");
			beany.anchor.setTo(0.5,0.5);
			beany.animations.add("left", [0,1,2], 10, true);
			beany.animations.add("turn", [3], 20, true);
			beany.animations.add("right", [4,5,6], 10, true);

			game.physics.enable(beany, Phaser.Physics.ARCADE);

			beany.body.collideWorldBounds = true;
			beany.body.maxVelocity.y = 500;
			beany.body.gravity.y = 981;
			
			beany.health = settings.health;
			
			health = settings.health;
			lives = settings.lives;
			score = settings.score;

			cursors = game.input.keyboard.createCursorKeys();
			jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

			jumpTimer = 0;

			facing = "right";
		},
		update: function(){
			beany.body.velocity.x = 0;
			if(cursors.left.isDown){
				beany.body.velocity.x = -200;

				if(facing != "left"){
					beany.animations.play("left");
					facing = "left";
				}
			}else if(cursors.right.isDown){
				beany.body.velocity.x = 200;

				if(facing != "right"){
					beany.animations.play("right");
					facing = "right";
				}
			}else{
				if(facing != "idle"){
					beany.animations.stop();
					if(facing == "left"){
						beany.frame = 0;
					}else{
						beany.frame = 4;
					}

					facing = "idle";
				}
			}

			if(jumpButton.isDown && beany.body.onFloor() && game.time.now > jumpTimer){
				beany.body.velocity.y = -500;
				jumpTimer = game.time.now + 700;
			}
		},
		getBeany: function(){
			return beany;
		}
	};

	return Player;
});