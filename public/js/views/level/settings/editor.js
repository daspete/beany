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

		level: null,

		events: {
			"focusout #levelName": "setLevelName"
		},

		initialize: function(){},

		render: function(){
			var levelSettingsEditor = this;

			this.$el.html(this.template({
				level: levelSettingsEditor.level.toJSON()
			}));

			this.delegateEvents();
		},

		setLevel: function(level){
			this.level = level;

			this.render();
		},

		setLevelName: function(e){
			this.level.set("name", $(e.target).val());
			$(".levelButton[data-id='"+this.level.get("id")+"']").html($(e.target).val());
			this.level.save();
		}

	});

	return LevelSettingsEditorView;

});