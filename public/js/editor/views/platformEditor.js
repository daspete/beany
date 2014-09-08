define([

	"jquery",
	"backbone",
	"models/platform",
	"views/platform",
	"collections/platforms"

], function(

	$,
	Backbone,
	PlatformModel,
	PlatformView,
	PlatformCollection

){
	
	var PlatformEditorView = Backbone.View.extend({

		className: "platformEditor",

		events: {
			"mousemove": "onMouseMove",
			"click": "onClick"
		},

		initialize: function(){
			var platformEditorView = this;

			this.platformCollection = new PlatformCollection();
			this.platformCollection.fetch({
				success: function(){
					platformEditorView.render();
				}
			});
		},

		render: function(){
			var platformEditorView = this;

			this.platformCollection.each(function(platform){
				var platformView = new PlatformView({ model: platform });

				platformEditorView.$el.append(platformView.el);
			});
		},

		onMouseMove: function(e){
			var posX = e.clientX;
			var posY = e.clientY;
		},

		onClick: function(e){
			e.stopImmediatePropagation();

			console.log("Click");
		}

	});

	return PlatformEditorView;
});