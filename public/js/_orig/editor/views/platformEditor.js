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

			this.level = 1;

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

			var nextID = 0;

			if(this.platformCollection.length > 0){
				nextID = parseInt(this.platformCollection.last().get("id"));
			}

			var posX = Math.ceil(e.clientX / 20) - 1;
			var posY = Math.ceil(e.clientY / 20) - 1;

			var platform = new PlatformModel({
				id: nextID + 1,
				type: 1,
				posX: posX,
				posY: posY,
				level: this.level
			});

			this.platformCollection.create(platform);

			var platformView = new PlatformView({ model: platform });

			this.$el.append(platformView.el);
		},

		setLevel: function(level){
			this.level = level;
		}

	});

	return PlatformEditorView;
});