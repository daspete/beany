define([

	"jquery",
	"underscore",
	"backbone",
	"collections/levels",
	"views/level/settings/editor",
	"views/platform/editor",
	"text!templates/levelEditor/editor.html"

], function(

	$,
	_,
	Backbone,
	LevelCollection,
	LevelSettingsEditorView,
	PlatformEditorView,
	LevelEditorTemplate

){

	var LevelEditorView = Backbone.View.extend({

		className: "levelEditorContainer",

		platformEditor: null,
		levelSettingsEditor: null,

		template: _.template(LevelEditorTemplate),

		events: {
			"click .levelButton": "setLevel"
		},

		initialize: function(){
			var levelEditor = this;

			this.platformEditor = new PlatformEditorView();
			this.levelSettingsEditor = new LevelSettingsEditorView();

			this.levelCollection = new LevelCollection();
			this.levelCollection.fetch({
				success: function(){
					levelEditor.render();
				}
			});
		},

		render: function(){
			var levelEditor = this;

			this.$el.html(this.template({
				levels: levelEditor.levelCollection.toJSON()
			}));

			this.platformEditor.$el = this.$("#platformEditorContainer");
			this.levelSettingsEditor.$el = this.$("#levelSettingsContainer");
		},

		setLevel: function(e){
			var levelID = $(e.target).data("id").toString();
			var level = (this.levelCollection.where({id: levelID}))[0];

			$(".levelButton").removeClass("active");
			$(e.target).addClass("active");


			this.platformEditor.setLevel(level);
			this.levelSettingsEditor.levelCollection = this.levelCollection;
			this.levelSettingsEditor.setLevel(level);
		}

	});

	return LevelEditorView;

});