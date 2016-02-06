module.exports = {
	dist: {
		src: ['<%= project.src_dir %>assets/js/**/*.js'],
		dest: '<%= project.build_dir%>assets/prod.js',
	}
};