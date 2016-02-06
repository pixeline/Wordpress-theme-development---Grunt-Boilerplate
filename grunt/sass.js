module.exports = {
	options: {
		outputStyle: 'compressed',
		// Default: nested — Values: nested, expanded, compact, compressed
		sourceMap: true
	},
	parent: {
		files: {
			'<%= project.build_dir%><%= project.theme_slug %>/assets/css/style.css': '<%= project.src_dir %>/style.scss'
		}
	}
};