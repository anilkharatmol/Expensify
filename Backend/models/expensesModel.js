const {DataTypes,Sequelize} = require("sequelize");
const database = require("../utils/database");


const Expenses = database.define("expenses",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false
    },
    amount:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Expenses;