module.exports = {
	options: {
		map: {
			inline: false
		},
		processors: [
		require('autoprefixer-core')({
			browsers: 'last 2 versions'
		}), // add vendor prefixes
		]
	},
	themes_css: {
		src: ['<%= project.build_dir %>wordpress/wp-content/themes/<%= project.theme_slug %>/assets/css/*.css']
	}
};