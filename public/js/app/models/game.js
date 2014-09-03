define([

	"backbone"

], function(Backbone){

	var GameModel = Backbone.Model.extend({

		defaults: {
			appName: "Beany",
			canvasWidth: 800,
			canvasHeight: 400,
			gameLevel: 1,
			gameSpeed: 0.5,
			gameLevelMultiplier: 0.1
		},

		url: "get/game",
		parse: function(data){
			return data.result;
		},
		initialize: function(){
			
		}
	});

	return GameModel;
});