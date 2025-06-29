const express = require("express");
const cors = require("cors");
const database = require("./utils/database");
const Users = require("./models/usersModel");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req,res)=>{
    res.send("Welcome to expensify")
})

app.use("/user", userRouter)

database
  .sync()
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((e) => console.log(e));
