const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const expenseRouter = require('./App/routes/web/expenseRoutes');

const app = express();

// ✅ CORS for your frontend
app.use(cors({
  origin: 'https://expense-tracker-daily.vercel.app',
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Routes
app.use('/api/expense', expenseRouter);

// ✅ Export app (no app.listen on Vercel)
module.exports = app;
