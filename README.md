HAPI Sequelize REST API Boilerplate
===================================

A simple bolierplate to get started quickly when creating a RESTful API using HAPI and Sequelize. First:

    npm install
    
Install the command line tools:

    npm install -g frisby jasmine-node nodemon dredd

Then configure the database_url in settings.js:

    module.exports = {
        port: parseInt(process.env.PORT, 10) || 3000,
        database_url: 'REPLACE_WITH_DB_URL'
    };
    
Start the Dev Server using:

    npm run dev
    
Run the Tests using:

    npm test
    
Run the Production server using:

    npm server

More details about the frameworks:

- [HAPI.JS](http://hapijs.com)
- [Sequelizejs.JS](http://sequelizejs.com)

