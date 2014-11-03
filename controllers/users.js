var Users = {
    all: {
        handler: function (request, reply) {
            
          reply([{id: 2}]);
        }
    },
    get: {
        handler: function (request, reply) {
            
          reply({id: request.params.id});
        }
    }
};

module.exports = Users;
