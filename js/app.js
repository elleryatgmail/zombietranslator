
// Require.js configuration
requirejs.config({
	    baseUrl: 'js',
        paths: {
		          jquery: 'vendors/jquery.min',
               bootstrap: 'vendors/bootstrap.min'
	    },
        "shim": {
		                "bootstrap": ["jquery"]
	            }
});

require(['main']);
