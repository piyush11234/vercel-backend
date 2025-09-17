let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let expenseSchema=new Schema({
    amount:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
let Expense=mongoose.model('Expense',expenseSchema);
module.exports=Expense;
