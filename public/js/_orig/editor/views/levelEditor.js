define([

	"jquery",
	"backbone",
	"views/levels"
	"views/platformEditor"

], function(

	$,
	Backbone,
	LevelsView,
	PlatformEditorView

){
	
	var LevelEditorView = Backbone.View.extend({

		className: "levelEditor",

		initialize: function(){
			this.levelsView = new LevelsView();
			this.platformEditorView = new PlatformEditorView();
			this.render();
		},

		render: function(){
			this.$el.append(this.levelsView.el);
			this.$el.append(this.platformEditorView.el);
		}

	});

	return LevelEditorView;
});