let express= require('express');
let cors = require('cors');
let mongoose = require('mongoose');
const expenseRouter = require('./App/routes/web/expenseRoutes');
require('dotenv').config();

let app=express();
app.use(cors());
app.use(express.json());

// connect to mongodb database
mongoose.connect(process.env.dbUrl).then(()=>{
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })

}).catch((e)=>{ console.log(err)});

// api

app.use('/api/expense',expenseRouter);
