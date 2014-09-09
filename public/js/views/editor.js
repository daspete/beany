define([

	"jquery",
	"underscore",
	"backbone",
	"text!templates/editorContainer.html",
	"collections/levels",
	"views/level/optionfield"

], function(

	$,
	_,
	Backbone,
	EditorContainerTemplate,
	LevelCollection,
	LevelOptionFieldView

){

	var EditorView = Backbone.View.extend({

		el: $(".editorContainer"),
		template:_.template(EditorContainerTemplate),

		events: {
			"click #createNewLevelButton": "createNewLevel",
			"click #editLevelButton": "changeLevel",
			"change #levelSelector": "changeLevel"
		},

		initialize: function(){
			var editorView = this;

			this.levelCollection = new LevelCollection();
			this.levelCollection.fetch({
				success: function(){
					editorView.render();
				}
			});
		},

		render: function(){
			var editorView = this;

			this.$el.html(this.template());

			this.levelCollection.each(function(level){
				var levelOptionFieldView = new LevelOptionFieldView({model: level});
				
				$(levelSelector).append(levelOptionFieldView.el);
			});
		},

		createNewLevel: function(){
			console.log("create new level");
		},

		changeLevel: function(){
			console.log("edit level");
		}

	});

	return EditorView;

});