/**
 * Display the size of the CSS or JS after minification / GZIP
 */
module.exports = {
	css: {
		src: ['<%= project.build_dir %>/assets/css/style.css']
	},
	js: {
		src: ['<%= project.build_dir %>/assets/js/main.js']
	}
};