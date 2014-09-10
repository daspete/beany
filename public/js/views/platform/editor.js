define([

	"jquery",
	"backbone",
	"models/platform",
	"views/platform/platform",
	"collections/platforms"

], function(

	$,
	Backbone,
	PlatformModel,
	PlatformView,
	PlatformCollection

){

	var PlatformEditorView = Backbone.View.extend({

		events: {
			"mousemove": "onMouseMove",
			"click": "onClick"
		},

		initialize: function(){},

		render: function(){
			var platformEditor = this;

			this.platformCollection.each(function(platform){
				var platformView = new PlatformView({ model: platform });

				platformEditor.$el.append(platformView.el);
			});

			this.delegateEvents();
		},

		onMouseMove: function(e){
			var posX = e.clientX;
			var posY = e.clientY;
		},

		onClick: function(e){
			e.stopImmediatePropagation();

			var offset = this.$el.offset();

			var posX = Math.ceil((e.clientX - offset.left) / 20) - 1;
			var posY = Math.ceil((e.clientY - offset.top) / 20) - 1;

			var platform = new PlatformModel({
				type: 1,
				posX: posX,
				posY: posY,
				level: this.level.get("id")
			});

			this.platformCollection.create(platform);
			
			var platformView = new PlatformView({ model: platform });

			this.$el.append(platformView.el);
		},

		setLevel: function(level){
			var platformEditor = this;

			this.level = level;

			this.$el.html("");

			this.platformCollection = new PlatformCollection();

			this.platformCollection.fetch({
				data: $.param({
					"levelID": platformEditor.level.get("id")
				}),
				success: function(){
					platformEditor.render();
				}
			});
		}

	});

	return PlatformEditorView;

});