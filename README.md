HAPI Sequelize REST API Boilerplate
===================================

A simple bolierplate to get up and running quickly when creating a REST API using HAPI and Sequelize. First:

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
    
To check the API documentation is correct this boilerplate uses the API Blueprint structure and dredd, run this from cli:

    dredd doc/blueprint.md http://localhost:3000
    
More details about the frameworks:

- [HAPI.JS](http://hapijs.com)
- [Sequelizejs.JS](http://sequelizejs.com)
- [API blueprint](http://apiary.io/blueprint)
- [Dredd](https://github.com/apiaryio/dredd)
- [Frisbyjs](http://frisbyjs.com/)


#TODO

add [Agilo](https://github.com/danielgtaylor/aglio) to read in the blueprint and display a pretty website
