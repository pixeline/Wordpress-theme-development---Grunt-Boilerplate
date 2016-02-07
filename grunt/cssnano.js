module.exports = {
	options: {
		sourcemap: false
	},
	critical_css: {
		files: {
			'<%= project.build_dir %><%= project.theme_slug %>/assets/css/critical.css': '<%= project.build_dir %><%= project.theme_slug %>/assets/css/critical.css'
		}
	}
};