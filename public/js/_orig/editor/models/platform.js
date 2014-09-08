define([

	"backbone"

], function(

	Backbone

){

	var PlatformModel = Backbone.Model.extend({

		defaults: {
			id: 0,
			type: 1,
			posX: 0,
			posY: 0,
			level: 1
		},

		initialize: function(){

		}	
		
	});

	return PlatformModel;
});