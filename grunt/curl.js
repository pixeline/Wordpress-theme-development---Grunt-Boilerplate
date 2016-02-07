module.exports = {
	wordpress: {
		src: 'http://wordpress.org/latest.zip',
		dest: '<%= project.wordpress %>latest.zip'
	},
	starter_theme:{
		src: '<%= project.starter_theme%>',
		dest: '<%= project.build_dir %>wordpress/wp-content/themes/<%= project.theme_slug%>.zip'
	}
};