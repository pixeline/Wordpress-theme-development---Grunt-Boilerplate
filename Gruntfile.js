module.exports = function(grunt) {
	
	// measures the time each task takes
	require('time-grunt')(grunt);
  
	// Autoload Grunt plugins & tasks
	require('load-grunt-config')(grunt, {
		init: true,
		data: {
			pkg: grunt.file.readJSON('package.json'),
			project: grunt.file.readJSON('project.json'),
		}
	});
};