module.exports = {
	options: {
		livereload: true,
	},
	structure: {
				files: ['<%= project.src_dir %>**/*', '!<%= project.src_dir %>/assets/css/**/*.scss', '!<%= project.src_dir %>/assets/js/**/*.js'],
		tasks: ['newer:copy'],
		options: {
			livereload: true
		}
	},
	scripts: {
		files: ['<%= project.src_dir %>**/*.js'],
		tasks: ['newer:jshint', 'newer:concat', 'newer:uglify', 'notify'],
	},
	css: {
		files: ['<%= project.src_dir %>assets/css/**/*.scss'],
		tasks: ['sass', 'notify'],
	},
};