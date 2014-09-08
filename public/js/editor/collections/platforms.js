define([

	"backbone",
	"models/platform"

], function(

	Backbone, 
	PlatformModel

){

	var PlatformCollection = Backbone.Collection.extend({

		model: PlatformModel,

		url: "api/platform",

		parse: function(data){
			return data.result;
		}
		
	});

	return PlatformCollection;

});