module.exports = {
	main: {
		files: [
		// includes files within path 
		// "/**" : includes files within path and its sub-directories 
		{
			expand: true,
			cwd: 'src/',
			src: '**',
			dest: 'build/',
			//	filter: 'isFile'
		}],
	},
}