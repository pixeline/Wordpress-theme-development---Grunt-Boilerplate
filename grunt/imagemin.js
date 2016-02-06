module.exports = {
	options: {
		cache: false
	},
	dist: {
		files: [{
			expand: true,
			cwd: '<%= project.src_dir %>',
			src: ['**/*.{png,jpg,jpeg,gif}'],
			dest: '<%= project.build_dir %>assets/media/'
		}]
	}
};