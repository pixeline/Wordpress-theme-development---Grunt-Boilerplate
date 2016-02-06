module.exports = {
	init: {
		src: '<%= project.src_dir %>**/*.*',
		overwrite: true,
		replacements: [{
			from: '{THEME_SLUG}',
			to: '<%= project.theme_slug %>'
		}, {
			from: '{THEME_VERSION}',
			to: '<%= pkg.version %>'
		}, {
			from: '{THEME_NAME}',
			to: '<%= project.theme_name %>'
		}]
	},
	cssconfig: {
		src: '<%= project.src_dir %>/style.css',
		overwrite: true,
		replacements: [{
			from: '{THEME_NAME}',
			to: '<%= project.theme_name %>'
		}]
	},
	parent_styles_info: {
		src: '<%= project.build_dir %><%= project.theme_slug %>/style.css',
		overwrite: true,
		replacements: [{
			from: '{THEME_NAME}',
			to: '<%= project.theme_name %>'
		}, {
			from: '{THEME_VERSION}',
			to: '<%= pkg.version %>'
		}]
	},
	parent_release_info: {
		src: '<%= project.release_dir %>packages.php',
		overwrite: true,
		replacements: [{
			from: '{THEME_VERSION}',
			to: '<%= pkg.version %>'
		}, {
			from: '{RELEASE_DATE}',
			to: function() {
				var d = new Date();
				var day = d.getDate();
				day = (day < 10) ? '0' + day : day;
				var month = d.getUTCMonth() + 1;
				month = (month < 10) ? '0' + month : month;
				var year = d.getFullYear();
				return year + '-' + month + '-' + day;
			}
		}]
	}
};