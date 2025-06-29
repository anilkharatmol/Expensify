const {Sequelize,DataTypes} = require("sequelize");
const database = require("../utils/database");

const Users = database.define("users",{
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email :{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }

})

module.exports = Users;