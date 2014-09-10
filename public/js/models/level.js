define(["backbone"], function(Backbone){

	var LevelModel = Backbone.Model.extend({

		idAttribute: "id",

		defaults: {
			id: 0,
			name: "Empty Level",
			width: 20,
			height: 500
		},

		initialize: function(){

		}
		
	});

	return LevelModel;

});