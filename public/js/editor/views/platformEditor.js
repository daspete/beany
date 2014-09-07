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
		}

	});

	return PlatformEditorView;
});