define(["backbone"], function(Backbone){

	var LevelModel = Backbone.Model.extend({
		defaults: {
			id: 1,
			name: "Empty Level"
		}
	});

	return LevelModel;

});