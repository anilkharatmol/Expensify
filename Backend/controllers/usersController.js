const Users = require("../models/usersModel");

const addUser = async (req,res) =>{
    try {
        const user = Users.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = { addUser }