const express = require("express");
const { addExpense, getExpenses, deleteExpenseById } = require("../controllers/expensesController");

const router = express.Router();

router.post("/add",addExpense);

router.get("/",getExpenses);

router.delete("/delete/:id", deleteExpenseById)

module.exports = router;