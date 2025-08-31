
let expenseModal=require('../../models/web/models');

//insert

let expenseInsert=(req,res)=>{
   
    let {amount, category, date} = req.body;
    let expense = new expenseModal({
        amount: amount,
        category: category,
        date: date
    });
    expense.save().then((data) => {
        res.status(200).json({
            message: "Expense added successfully",
            data: data
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Error adding expense",
            error: err
        });
    });
}

    // delete
    let expenseDelete=async(req,res)=>{
        let expenseId=req.params.id;
        let deleteExpense=await expenseModal.deleteOne({_id:expenseId});
        res.send({
            status:1,
            message:"Expense deleted successfully",
            id:expenseId,
            data:deleteExpense
        })
        
    }

    // view all expenses
    let expenseView=async(req,res)=>{
        let expenses=await expenseModal.find();
        res.send({
            status:1,
            message:"All Expenses",
            data:expenses
        })
    }
   



module.exports={expenseInsert,expenseDelete,expenseView};