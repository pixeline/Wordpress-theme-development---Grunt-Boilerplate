module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	//Tasks
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			dev: {
				src: ['/src/js/**/*.js', '!/src/js/jQuery-1.10.2.min.js']
			}
		},
		// Copy SRC to BUILD
		copy: {
			main: {
				files: [
				// includes files within path 
				// "/**" : includes files within path and its sub-directories 

				{
					expand: true,
					cwd: 'src/',
					src: '**',
					dest: 'build/',
				//	filter: 'isFile'
				}
				],
			},
		},
	});
	// task setup 
	grunt.registerTask('default', ['copy:main:files']);
	grunt.registerTask('check', ['jshint']);
};