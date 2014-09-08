define([



], function(){

	var game=null,
		health=null,
		healthText=null,
		lives=null,
		livesText=null,
		score=null
		scoreText=null,
		stateText=null;

	var HUD = {
		init:function(_game){
			game = _game;
		},
		preload: function(){

		},
		create: function(_health, _score, _lives){
			score = _score;
			scoreText = game.add.text(10,10, "Score: "+score, {
				fontSize: "14px",
				fill: "#fff"
			});

			lives = _lives;
			livesText = game.add.text(10,90, "Lives: "+lives, {
				fontSize: "14px",
				fill: "#fff"
			});

			health = _health;
			healthText = game.add.text(10,50, "Health: "+health, {
				fontSize: "14px",
				fill: "#fff"
			});
		},
		updateHealth: function(_health){
			health = _health;
			healthText.text = "Health: "+health;
		},
		updateLives: function(_lives){
			lives = _lives;
			livesText.text = "Lives: "+lives;
		},
		updateScore: function(_score){
			score = _score;
			scoreText.text = "Score: "+score;
		},
		createTitle: function(_title){
			stateText = game.add.text(
				game.world.centerX, 
				game.world.centerY, 
				_title, {
					font: "54px Arial",
					fill: "#fff"
				}
			);

			stateText.anchor.setTo(0.5, 0.5);
		}
	};

	return HUD;
});