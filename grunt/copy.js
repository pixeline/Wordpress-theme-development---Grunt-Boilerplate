module.exports = {
	options: {
		mode: true,
	},
	parent: {
		cwd: '<%= project.src_dir %>',
		src: '**',
		dest: '<%= project.build_dir %><%= project.theme_slug %>/',
		expand: true,
		dot: true
	},
/*
	parent_release_package: {
		cwd: '.',
		src: 'packages.php',
		dest: '<%= project.release_dir %>',
		expand: true,
	}
*/
};