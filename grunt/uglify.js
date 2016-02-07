module.exports = {
	options: {
		compress: {
			// drop_console: true // Comment this line to remove all console.* on uglify
		}
	},
	js: {
		options: {
			// preserveComments: 'all',
			preserveComments: false,
			sourceMap: true,
			mangle: false // Replaces variables and functions by shorter names if true
		},
		files: {
			'<%= project.build_dir %>wordpress/wp-content/themes/<%= project.theme_slug %>/assets/js/main.js': '<%= project.build_dir %>wordpress/wp-content/themes/<%= project.theme_slug %>/assets/js/script.js'
		}
	}
};