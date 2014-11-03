var requireDirectory = require('require-directory'),
    controllers = requireDirectory(module, '../controllers');

module.exports = [
    {
        method: 'GET',
        path: '/users',
        config: controllers.users.all
    },
    {
        method: 'GET',
        path: '/users/{id}',
        config: controllers.users.get
    }
];