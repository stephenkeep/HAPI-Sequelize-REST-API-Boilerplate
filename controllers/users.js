var Users = {
    all: {
        handler: function (request, reply) {
            
          reply([{id: 2}]);
        }
    },
    get: {
        handler: function (request, reply) {
            
          reply({id: parseInt(request.params.id)});
        }
    }
};

module.exports = Users;
