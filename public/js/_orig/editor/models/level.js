define([

	"backbone"

], function(

	Backbone

){

	var LevelModel = Backbone.Model.extend({

		defaults: {
			id: 1,
			name: "Tutorial Level"
		},

		initialize: function(){

		}	
		
	});

	return LevelModel;
});