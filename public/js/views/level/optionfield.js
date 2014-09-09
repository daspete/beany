define([

	"jquery",
	"backbone",

], function(

	$,
	Backbone

){

	var LevelOptionFieldView = Backbone.View.extend({

		tagName: "option",
		attributes: function(){
			return {
				"value": this.model.get("id")
			}
		},

		initialize: function(){
			this.render();
		},

		render: function(){
			this.$el.html(this.model.get("name"));
			console.log("blubb");
		}
		
	});

	return LevelOptionFieldView;


});