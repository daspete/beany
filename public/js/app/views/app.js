define([

	"jquery",
	"backbone",
	"game/states/load",
	"game/states/start",
	"game/states/play",
	"game/states/end",
	"phaser"

], function($, Backbone, GameState_Load, GameState_Start, GameState_Play, GameState_End){

	var AppView = Backbone.View.extend({

		el: $(".appContainer"),

		initialize: function(){
			var app_view = this;

			console.log("AppView initialized");
			this.render();
		},

		render: function(){
			var app_view = this;

			var game = new Phaser.Game(800, 400, Phaser.AUTO, "game");

			GameState_Load.init(game, "START");
			game.state.add("LOAD", GameState_Load.getState());

			GameState_Start.init(game, "PLAY");
			game.state.add("START", GameState_Start.getState());

			GameState_Play.init(game, "END");
			game.state.add("PLAY", GameState_Play.getState());

			GameState_End.init(game, "PLAY");
			game.state.add("END", GameState_End.getState());

			game.state.start("LOAD");
		}
	});

	return AppView;
});