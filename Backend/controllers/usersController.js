const Users = require("../models/usersModel");

const addUser = async (req, res) => {
  try {
    const newUser = await Users.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({ message: "Email already exists" });
    }
    res.status(500).json({ message: "Server error" });
  }
};

const loginAuth = async (req,res) =>{
    try {
        const {email,password} = req.body;
        const user = await Users.findOne({where:{email}});

        
        if(!user) {
            return res.status(404).json({message:"User does not exists"})
        }

        if(user.password === password) {
            res.status(201).json({message: "User logged in successfully"})
        }
        else{
            res.status(401).json({message : "Password doesn't match"})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = { addUser, loginAuth }