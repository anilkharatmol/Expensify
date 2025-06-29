const { Sequelize } = require("sequelize");

const database = new Sequelize("expensify", "root", "Anil@1829", {
  host: "localhost",
  dialect: "mysql",
});


(async () => {
  try {
    await database.authenticate();
    console.log("Connection to the database has been created");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = database;
