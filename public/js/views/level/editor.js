define([

	"jquery",
	"underscore",
	"backbone",
	"models/level",
	"collections/levels",
	"views/level/settings/editor",
	"views/platform/editor",
	"text!templates/levelEditor/editor.html"

], function(

	$,
	_,
	Backbone,
	LevelModel,
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
			"click .levelButton": "setLevelFromButton",
			"click .createLevelButton" : "createLevel"
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

		setLevelFromButton: function(e){
			var levelID = $(e.target).data("id").toString();
			var level = this.getLevel(levelID);

			$(".levelButton").removeClass("active");
			$(e.target).addClass("active");

			this.setLevel(level);
		},

		getLevel: function(levelID){
			var level = (this.levelCollection.where({id: levelID}))[0];

			return level;
		},

		setLevel: function(level){
			this.platformEditor.setLevel(level);
			this.levelSettingsEditor.levelCollection = this.levelCollection;
			this.levelSettingsEditor.setLevel(level);
		},

		createLevel: function(){
			var levelEditor = this;

			var level = new LevelModel();

			var currentLevel = this.levelCollection.create(level, {
				success: function(){
					levelEditor.render();
					levelEditor.setLevel(levelEditor.getLevel(currentLevel.get("id")))	
				}
			});

			
		}

	});

	return LevelEditorView;

});