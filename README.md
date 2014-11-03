HAPI Sequelize REST API Boilerplate
===================================

A simple bolierplate to get up and running quickly when creating a REST API using HAPI and Sequelize. First:

    npm install

Then configure the database_url in settings.js:

    module.exports = {
        port: parseInt(process.env.PORT, 10) || 3000,
        database_url: 'REPLACE_WITH_DB_URL'
    };

More details about the frameworks:

- [HAPI.JS](http://hapijs.com)
- [Sequelizejs.JS](http://sequelizejs.com)

