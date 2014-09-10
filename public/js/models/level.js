define(["backbone"], function(Backbone){

	var LevelModel = Backbone.Model.extend({
		defaults: {
			id: 1,
			name: "Empty Level",
			width: 20,
			height: 500
		}
	});

	return LevelModel;

});