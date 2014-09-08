define([

	"jquery",
	"backbone",
	"app/models/game",
	"game/states/load",
	"game/states/start",
	"game/states/play",
	"game/states/end",
	"phaser"

], function($, Backbone, GameModel, GameState_Load, GameState_Start, GameState_Play, GameState_End){

	var AppView = Backbone.View.extend({

		el: $(".appContainer"),

		initialize: function(){
			var app_view = this;

			this.gameSettings = new GameModel();
			this.gameSettings.fetch({
				success: function(){
					app_view.render();
				}
			});
		},

		render: function(){
			var app_view = this;

			var game = new Phaser.Game(
				app_view.gameSettings.get("canvasWidth"), 
				app_view.gameSettings.get("canvasHeight"), 
				Phaser.AUTO, 
				"game"
			);

			GameState_Load.init(game, app_view.gameSettings, "START");
			game.state.add("LOAD", GameState_Load.getState());

			GameState_Start.init(game, app_view.gameSettings, "PLAY");
			game.state.add("START", GameState_Start.getState());

			GameState_Play.init(game, app_view.gameSettings, "END");
			game.state.add("PLAY", GameState_Play.getState());

			GameState_End.init(game, app_view.gameSettings, "PLAY");
			game.state.add("END", GameState_End.getState());

			game.state.start("LOAD");
		}
	});

	return AppView;
});