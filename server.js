var Hapi = require('hapi'),
    settings = require('./config/settings');
    //models = require('./models/models');

var server = new Hapi.Server('0.0.0.0', settings.port);

// Add the server routes
server.route(require('./config/routes'));

//Start the server
server.start(function() {
    //Log to the console the host and port info
    console.log('Server started at: ' + server.info.uri);
});