const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	resolve: {
		modules: [ path.resolve( __dirname, 'src', 'js' ), 'node_modules' ],
	},
	entry: {
		'init-api': path.resolve( __dirname, 'src', 'js', 'lib', 'init-api' ),
		'admin-page': path.resolve( __dirname, 'src', 'js', 'lib', 'admin-page' ),
		'recommended-widget': path.resolve( __dirname, 'src', 'js', 'widgets', 'recommended' ),
	},
};
