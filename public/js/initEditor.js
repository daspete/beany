require.config({
	urlArgs: "noCache="+(new Date()).getTime(),
	paths: {
		jquery: "vendor/jquery/dist/jquery.min",
		underscore: "vendor/underscore/underscore-min",
		backbone: "vendor/backbone/backbone",
		text: "vendor/requirejs-text/text",
		phaser: "vendor/phaser-official/build/phaser.min",
		"bootstrap": "maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"
	}
});

require([

	"views/editor"
	
], function(EditorView){
	
	var editorView = new EditorView();

});