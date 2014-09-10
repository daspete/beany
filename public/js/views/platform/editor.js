define([

	"jquery",
	"backbone",
	"models/platform",
	"collections/platforms",
	"views/platform/platform"

], function(

	$,
	Backbone,
	PlatformModel,
	PlatformCollection,
	PlatformView

){

	var PlatformEditorView = Backbone.View.extend({

		level: null,
		platformCollection: null,

		events: {
			"mousemove": "onMouseMove",
			"click": "onClick"
		},


		initialize: function(){

		},

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
			console.log(posX);
		},

		onClick: function(e){
			e.stopImmediatePropagation();

			var offset = this.$el.offset();

			var nextID = 0;

			if(this.platformCollection.length > 0){
				nextID = parseInt(this.platformCollection.last().get("id"));
			}

			var posX = Math.ceil((e.clientX - offset.left) / 20) - 1;
			var posY = Math.ceil((e.clientY - offset.top) / 20) - 1;

			var platform = new PlatformModel({
				id: nextID + 1,
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
			})
		}

	});

	return PlatformEditorView;

});