define([

	"jquery",
	"backbone",
	"game/states/load",
	"game/states/start",
	"game/states/play",
	"game/states/end",
	"phaser"

], function(

	$,
	Backbone,
	LoadState,
	StartState,
	PlayState,
	EndState

){

	var GameView = Backbone.View.extend({
		el: $(".gameContainer"),

		initialize: function(){
			this.render();
		},

		render: function(){
			var game_view = this;

			var game = new Phaser.Game(800,500,Phaser.AUTO,"game");

			LoadState.init(game, "START");
			game.state.add("LOAD", LoadState.getState());

			StartState.init(game,"PLAY");
			game.state.add("START", StartState.getState());

			PlayState.init(game, "END");
			game.state.add("PLAY", PlayState.getState());

			EndState.init(game, "PLAY");
			game.state.add("END", EndState.getState());


			game.state.start("LOAD");
		}
	});

	return GameView;

});