define([

	"jquery",
	"backbone",

], function(

	$,
	Backbone

){

	var PlatformView = Backbone.View.extend({

		className: "platform",

		attributes: function(){
			return {
				"data-id": this.model.get("id"),
				"data-type": this.model.get("type"),
				"data-posx": this.model.get("posX"),
				"data-posy": this.model.get("posY")
			}
		},

		events: {
			"click": "onClick"
		},

		initialize: function(){
			this.model.on("destroy", this.remove, this);
			this.render();
		},

		render: function(){
			var platformModel = this.model;

			this.$el.css({
				"top": (platformModel.get("posY")) * 20,
				"left": (platformModel.get("posX")) * 20 - 1
			});
		},

		remove: function(){
			this.$el.remove();
		},

		onClick: function(e){
			e.stopImmediatePropagation();

			this.model.destroy();
		}

	});

	return PlatformView;
});