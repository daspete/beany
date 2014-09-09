module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		compass: {
			dist: {
				options: {
					sassDir: "sass",
					cssDir: "css"
				}
			}
		},

		requirejs: {
			compileEditor: {
				options: {
					name: "initEditor",
					baseUrl: "js",
					mainConfigFile: "js/initEditor.js",
					out:"js/beanyEditor.min.js"
				}
			},
			compileBeany: {
				options: {
					name: "initGame",
					baseUrl: "js",
					mainConfigFile: "js/initGame.js",
					out:"js/beany.min.js"
				}
			}
		},

		watch: {
			css: {
				files: "**/*.sass",
				tasks: ["compass"],
				options: {
		            spawn: false
		        }
			},
			scripts: {
				files: [
					"js/initEditor.js",
					"js/initGame.js",
					"js/collections/**/*.js",
					"js/game/**/*.js",
					"js/models/**/*.js",
					"js/views/**/*.js",
					"js/collections/**/*.js",
					"js/templates/**/*.*"
				],
				tasks: [
					"requirejs:compileEditor",
					"requirejs:compileBeany"
				]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-requirejs");
	grunt.loadNpmTasks("grunt-contrib-compass");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["watch"]);

};