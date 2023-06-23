const { Model, DataTypes} = require('sequelize');


class User extends Model {
    static init(connection){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        },{
            sequelize: connection
        })    
    };

    static associate(models){
        
        this.hasMany(models.Addresses, { foreignKey: 'user_id' , as: 'addresses'});
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs'})
        
    }
}


module.exports = User;


// const { Model, DataTypes } = require('sequelize');

// function initUserModel(connection) {
//   const User = connection.define('User', {
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//   });

//   return User;
// }

//module.exports = initUserModel;
