/**
 * Deploy release
 */
module.exports = {
	parent_theme_release: {
		auth: {
			host: 'ftp.s139934.gridserver.com',
			port: 21,
			authKey: 'devteam'
		},
		src: 'build/release',
		dest: 'domains/<%= project.production_url %>/html/',
		forceVerbose: true
	},
	parent_theme: {
		auth: {
			host: 'ftp.s139934.gridserver.com',
			port: 21,
			authKey: 'devteam'
		},
		src: '<%= project.build_dir %><%= project.theme_slug %>',
		dest: 'domains/<%= project.production_url %>/html/wp-content/themes/<%= project.theme_slug %>',
		forceVerbose: true
	}
};