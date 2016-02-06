module.exports = {
	parent_theme: {
		options: {
			archive: '<%= project.release_dir %>update/<%= project.theme_slug %>.zip'
		},
		expand: true,
		cwd: '<%= project.build_dir %><%= project.theme_slug %>/',
		src: ['**']
	}
};