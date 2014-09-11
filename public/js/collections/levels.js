define([

	"backbone",
	"models/level"

], function(

	Backbone,
	LevelModel

){

	var LevelCollection = Backbone.Collection.extend({

		model: LevelModel,

		url: "api/levels",

		parse: function(data){
			return data.result;
		}
	});

	return LevelCollection;

});