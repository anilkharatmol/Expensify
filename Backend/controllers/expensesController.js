const Expenses = require("../models/expensesModel");

const addExpense = async (req, res) => {
  try {
    await Expenses.create(req.body);

    res.status(201).json({ message: "Expense added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expenses.findAll();

    res.status(201).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteExpenseById = async (req,res) => {
  const { id } = req.params;
  try {
    const expense = await Expenses.destroy({ where: { id: id } });

    if (!expense) {
      res.status(404).json({ message: "Expense not found" });
    }

    res
      .status(201)
      .json({ message: `Expense with id ${id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addExpense, getExpenses, deleteExpenseById };
