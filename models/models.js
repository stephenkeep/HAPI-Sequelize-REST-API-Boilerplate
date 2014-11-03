var Sequelize = require('sequelize'),
    settings = require('../config/settings'),
    database = settings.database_url;

// initialize database connection
var sequelize = new Sequelize(database, {
    logging: false,
    omitNull: true,
    native: true,
	define: {
		timestamps: false,
		underscored: true
	}
});

// load models
var models = [
    'User'
];
models.forEach(function (model) {
	module.exports[model] = sequelize.import(__dirname + '/' + model.substr(0, 1).toLowerCase() + model.substr(1));
});

// describe relationships
(function (m) {
    
}(module.exports));

// export connection
module.exports.sequelize = sequelize;