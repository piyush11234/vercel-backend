const Expense = require("../models/models.js"); // make sure this path is correct

// Insert Expense
const expenseInsert = async (req, res) => {
  try {
    const { amount, category, date } = req.body;
    const expense = new Expense({ 
      amount, 
      category, 
      date, 
      user: req.user.id // associate expense with logged-in user
    });
    const data = await expense.save();

    res.status(200).json({
      status: 1,
      message: "Expense added successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: "Error adding expense",
      error: err.message,
    });
  }
};

// Delete Expense
const expenseDelete = async (req, res) => {
  try {
    const expenseId = req.params.id;

    // Ensure only the owner can delete
    const deleted = await Expense.deleteOne({ _id: expenseId, user: req.user.id });

    if (deleted.deletedCount === 0) {
      return res.status(404).json({
        status: 0,
        message: "Expense not found or unauthorized",
      });
    }

    res.status(200).json({
      status: 1,
      message: "Expense deleted successfully",
      id: expenseId,
    });
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: "Error deleting expense",
      error: err.message,
    });
  }
};

// View All Expenses for logged-in user
const expenseView = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });

    res.status(200).json({
      status: 1,
      message: "User Expenses",
      data: expenses,
    });
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: "Error fetching expenses",
      error: err.message,
    });
  }
};

module.exports = { expenseInsert, expenseDelete, expenseView };
