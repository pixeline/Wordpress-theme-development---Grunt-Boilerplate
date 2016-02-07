module.exports = {
	dist: {
		src: ['<%= project.src_dir %>assets/js/**/*.js'],
		dest: '<%= project.build_dir %>wordpress/wp-content/themes/<%= project.theme_slug %>/assets/prod.js',
	}
};