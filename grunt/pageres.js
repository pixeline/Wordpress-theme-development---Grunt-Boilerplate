/*
	grunt-pageres
	
	makes screenshots of urls.
	
	see https://www.npmjs.com/package/grunt-pageres
*/
module.exports = {
	screenshot: {
		options: {
			urls: '<%= project.mamp_install %>',
			css: '',
			sizes: ['880x660'],
			dest: '<%= project.src_dir %>',
			filename: 'screenshot',
			format: 'png',
			width: 880,
			height: 660,
			crop: true
		}
	}
};