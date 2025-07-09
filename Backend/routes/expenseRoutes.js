const express = require("express");
const { addExpense, getExpenses, deleteExpenseById } = require("../controllers/expensesController");
const userAuth = require("../middlewares/userAuth");

const router = express.Router();

router.post("/add", userAuth, addExpense);

router.get("/", userAuth, getExpenses);

router.delete("/delete/:id", deleteExpenseById)

module.exports = router;