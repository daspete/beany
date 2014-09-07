define([

	"jquery",
	"backbone",
	"views/settingsEditor",
	"views/platformEditor"

], function(

	$, 
	Backbone, 
	SettingsEditorView, 
	PlatformEditorView

){

	var AppView = Backbone.View.extend({

		el: $(".appContainer"),

		initialize: function(){

			this.platformEditorView = new PlatformEditorView();
			this.render();
		},

		render: function(){
			this.$el.append(this.platformEditorView.el);
		}

	});

	return AppView;

});