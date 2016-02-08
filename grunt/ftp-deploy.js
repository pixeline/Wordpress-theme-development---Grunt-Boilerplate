/**
 * Deploy release
 */
module.exports = {
	production: {
		auth: {
			host: '<%= project.ftp_hostname %>',
			port: '<%= project.ftp_port %>',
			authKey: '<%= project.ftp_username %>'
		},
		src: 'build/release',
		dest: '<%= project.full_path_to_production_public_folder %>',
		forceVerbose: true
	}
};