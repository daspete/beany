define([

	"jquery",
	"backbone",
	"views/settingsEditor",
	"views/levelEditor"

], function(

	$, 
	Backbone, 
	SettingsEditorView, 
	LevelEditorView

){

	var AppView = Backbone.View.extend({

		el: $(".appContainer"),

		initialize: function(){

			this.levelEditorView = new LevelEditorView();
			this.render();
		},

		render: function(){
			this.$el.append(this.levelEditorView.el);
		}

	});

	return AppView;

});