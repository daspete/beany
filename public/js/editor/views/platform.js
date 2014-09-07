define([

	"jquery",
	"underscore",
	"backbone",
	"text!templates/platformTemplate.html"

], function(

	$,
	_,
	Backbone,
	PlatformTemplate

){

	var PlatformView = Backbone.View.extend({

		template:_.template(PlatformTemplate),

		initialize: function(){
			this.render();
		},

		render: function(){
			this.el = this.template({ model: this.model });
		}

	});

	return PlatformView;

});