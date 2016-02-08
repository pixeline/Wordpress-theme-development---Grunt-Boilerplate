# Wordpress-theme-development---Grunt-Boilerplate
Clone this repo to get a full automated Wordpress theme development boilerplate. 

## features
- uses SASS
- minify, combines javascript
- automatically sets up a local Wordpress installation

## how-to

1. Clone this on your local development machine.
2. Edit project.json to describe your project parameters.
3. Via Command Line, navigate to your project folder and type `npm update`
4. type `grunt init` : a local wordpress installation is automatically created.
5. Create a local mysql database, create the wp-config.php file for the newly installed wordpress.
6. type `grunt ` : your local development folder is being watched for JS and SASS files, automatically updating your new theme in the Wordpress installation.
7. (untested, feedback welcome) When ready to deploy, type `grunt deploy`

## todo
- automate initial database creation and wp-config.php file.
