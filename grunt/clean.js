module.exports = {
	dist: {
		src: '<%= project.build_dir %>/**/*'
	},
	parent_theme_assets: {
		src: [
		// Delete these files
		'<%= project.build_dir %><%= project.theme_slug %>/assets/css/**/*.scss']
	},
	wordpress: {
		src: ['<%= project.wordpress %>latest.zip', '<%= project.build_dir %>wordpress/wp-content/themes/**/*', '!<%= project.build_dir %>wordpress/wp-content/themes/index.php', '<%= project.build_dir %>wordpress/wp-content/plugins/hello.php' ]
	},
	wp_themes: {
		src: ['<%= project.build_dir %>wordpress/wp-content/themes/**/*', '!<%= project.build_dir %>wordpress/wp-content/themes/index.php'],
	}
};