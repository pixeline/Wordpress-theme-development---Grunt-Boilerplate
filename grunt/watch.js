module.exports = {
	scripts: {
		files: ['js/*.js'],
		tasks: ['jshint','concat', 'uglify'],
		options: {
			spawn: false,
		},
	}
};