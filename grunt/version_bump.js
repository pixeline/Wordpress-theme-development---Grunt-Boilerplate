module.exports = {
	files: ['package.json'],
	versionStructure: [{
		"name": "major",
		"prefix": "",
		"order": 1,
		"priority": 1,
		"resettable": false
	}, {
		"name": "minor",
		"prefix": ".",
		"order": 2,
		"priority": 2,
		"resettable": true
	}, {
		"name": "patch",
		"prefix": ".",
		"order": 3,
		"priority": 3,
		"resettable": true
	}]
};