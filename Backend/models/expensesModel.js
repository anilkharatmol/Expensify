const {DataTypes,Sequelize} = require("sequelize");
const database = require("../utils/database");
const Users = require("./usersModel");


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
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    }
})

Expenses.belongsTo(Users, { foreignKey: "userId" });
Users.hasMany(Expenses, { foreignKey: "userId" });

module.exports = Expenses;