var userModel = function(sequelize, DataTypes) {
    
    var User = sequelize.define('User', {
        
        username: DataTypes.STRING
        
    }, {
        classMethods: {
      
        }
    });

    return User;
};

module.exports = userModel;
