define([], function(){

	var game = null,
		health = null,
		healthText = null,
		lives = null,
		livesText = null,
		score = null,
		scoreText = null,
		introText = null,
		defaultFont = {
			fontSize: "12px",
			fill: "#fff"
		},
		bigFont = {
			fontSize: "40px Arial",
			fill: "#fff"
		};


	var HUD = {

		init: function(_game){
			game = _game;
		},

		preload: function(){

		},

		create: function(_health, _lives, _score){
			health = _health;
			lives = _lives;
			score = _score;

			
			livesText = game.add.text(10, 10, "LIVES: " + lives, defaultFont);
			healthText = game.add.text(10, 50, "HEALTH: " + health, defaultFont);
			scoreText = game.add.text(10, 90, "SCORE: " + score, defaultFont);
		},

		updateLives: function(_lives){
			lives = _lives;
			livesText.text = "LIVES: " + lives;
		},

		updateHealth: function(_health){
			health = _health;
			healthText.text = "HEALTH: " + health;
		},

		updateScore: function(_score){
			score = _score;
			scoreText.text = "SCORE: " + score;
		},

		createIntro: function(_title){
			introText = game.add.text(game.world.centerX, game.world.centerY, _title, bigFont);
			introText.anchor.setTo(0.5,0.5);
		}

	};

	return HUD;

});