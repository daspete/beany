define([

	"jquery",
	"underscore",
	"backbone",
	"text!templates/levelEditor/settings/settings.html"

], function(

	$,
	_,
	Backbone,
	LevelSettingsTemplate

){

	var LevelSettingsEditorView = Backbone.View.extend({

		template:_.template(LevelSettingsTemplate),

		initialize: function(){},

		render: function(){

		},

		setLevel: function(level){
			this.$el.html(this.template({
				level: level.toJSON()
			}));
		}

	});

	return LevelSettingsEditorView;

});