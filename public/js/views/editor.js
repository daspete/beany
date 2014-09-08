define([

	"jquery",
	"underscore",
	"backbone",
	"text!templates/editorContainer.html"

], function(

	$,
	_,
	Backbone,
	EditorContainerTemplate

){

	var EditorView = Backbone.View.extend({

		el: $(".editorContainer"),
		template:_.template(EditorContainerTemplate),

		initialize: function(){
			this.render();
		},

		render: function(){
			this.$el.html(this.template());
		}

	});

	return EditorView;

});