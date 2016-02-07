module.exports = {
	parent_theme: {
		options: {
			url: 'http://<%= project.mamp_install %>/',
			width: 1200,
			height: 900,
			outputfile: '<%= project.build_dir %><%= project.theme_slug %>/assets/css/critical.css',
			filename: '<%= project.build_dir %><%= project.theme_slug %>/assets/css/screen.css',
			buffer: 800 * 1024,
			ignoreConsole: false
		}
	}
};