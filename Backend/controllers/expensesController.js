const Expenses = require("../models/expensesModel");

const addExpense = async (req, res) => {
  try {
    const expenseData = { ...req.body, userId: req.user.id };
    await Expenses.create(expenseData);

    res.status(201).json({ message: "Expense added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expenses.findAll({ where: { userId: req.user.id } });
    res.status(201).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteExpenseById = async (req,res) => {
  const { id } = req.params;
  try {
    // Only delete if the expense belongs to the authenticated user
    const expense = await Expenses.findOne({ where: { id: id, userId: req.user.id } });

    if (!expense) {
      return res.status(404).json({ message: "Expense not found or not authorized" });
    }

    await Expenses.destroy({ where: { id: id, userId: req.user.id } });

    res
      .status(201)
      .json({ message: `Expense with id ${id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addExpense, getExpenses, deleteExpenseById };
