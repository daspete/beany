define([

	"backbone",
	"models/platform"

], function(

	Backbone, 
	PlatformModel

){

	var PlatformCollection = Backbone.Collection.extend({

		model: PlatformModel,

		url: "api/platforms",

		parse: function(data){
			return data.result;
		}
		
	});

	return PlatformCollection;

});