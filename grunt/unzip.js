module.exports = {
	wordpress: {
		src: '<%= project.wordpress %>latest.zip',
		dest: '<%= project.wordpress %>'
	},
	starter_theme:{
		src: '<%= project.build_dir %>wordpress/wp-content/themes/<%= project.theme_slug%>.zip',
		dest: '<%= project.build_dir %>wordpress/wp-content/themes/<%= project.theme_slug%>'
	}
};