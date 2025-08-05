import User from "../models/User.js";
import Expense from "../models/Expense.js";
import xlsx from "xlsx";

//Add expense category
exports.addExpense = async (req, res) => {
    const userId = req.user.id;

    try{
        const{icon, category, amount, date} = req.body;
        if(!category || !amount || !date){
            return res.status(400).json({message: `All fields are required ${category} ${amount} ${date}`});
        }

        const newExpense = new Expense({
            userId,
            icon,
            category,
            amount,
            date: new Date(date)
        });

        await newExpense.save();
        res.status(200).json(newExpense);
    } catch(error){
        res.status(500).json({message: "Server Error"});
    }
}

//Get all Expense category
exports.getAllExpense = async (req, res) => {
    const userId = req.user.id;

    try{
        const expense = await Expense.find({userId}).sort({date: -1});
        res.json(expense);
    } catch(error){
        res.status(500).json({ message: "Server Error"});
    }
};

//Download Excel
exports.downloadExpenseExcel = async (req, res) => {
    const userId = req.user.id;
    try{
        const expense = await Expense.find({userId}).sort({date: -1});

        //prepare data for excel
        const data = expense.map((item)=> ({
            category: item.category,
            Amount: item.amount,
            Date: item.date,
        }));

        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb,ws,"expense");
        xlsx.writeFile(wb, "expense_details.xlsx");
        res.download("expense_details.xlsx");
    }catch (error){
        res.status(500).json({message: "Server Error", err: error.message});
    }
}

//Delete Expense category
exports.deleteExpense = async (req, res) => {
    try{
        await Expense.findByIdAndDelete(req.params.id);
        res.json({message: "Expense Deleted Successfully"});
    } catch(error){
        res.status(500).json({message: "Server Error"});
    }
};

