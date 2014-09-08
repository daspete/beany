define([

	"backbone",
	"models/level"

], function(

	Backbone, 
	LevelModel

){

	var PlatformCollection = Backbone.Collection.extend({

		model: LevelModel,

		url: "api/level",

		parse: function(data){
			return data.result;
		}
		
	});

	return LevelCollection;

});