define([

	"jquery",
	"backbone",
	"views/level/editor"

], function(

	$,
	Backbone,
	LevelEditorView
	
){

	var EditorView = Backbone.View.extend({

		el: $(".editorContainer"),

		initialize: function(){
			this.levelEditor = new LevelEditorView();

			this.render();
		},

		render: function(){
			var editor = this;

			this.$el.append(editor.levelEditor.el);
		}

	});

	return EditorView;

});