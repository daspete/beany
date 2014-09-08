require.config({
	urlArgs: "noCache="+(new Date()).getTime(),
	paths: {
		jquery: "../vendor/jquery/dist/jquery.min",
		underscore: "../vendor/underscore/underscore-min",
		backbone: "../vendor/backbone/backbone",
		text: "../vendor/requirejs-text/text"
	}
});

require([

	"views/app"
	
], function(AppView){
	
	var app_view = new AppView();

});