const User = require("../models/User");
const Income = require("../models/Income");
const xlsx = require('xlsx');

//Add income source
exports.addIncome = async (req, res) => {
    const userId = req.user.id;

    try{
        const{icon, source, amount, date} = req.body;
        if(!source || !amount || !date){
            return res.status(400).json({message: "All fields are required"});
        }

        const newIncome = new Income({
            userId,
            icon,
            source,
            amount,
            date: new Date(date)
        });

        await newIncome.save();
        res.status(200).json(newIncome);
    } catch(error){
        res.status(500).json({message: "Server Error", error: error.message});
    }
}

//Get all income source
exports.getAllIncome = async (req, res) => {
    const userId = req.user.id;

    try{
        const income = await Income.find({userId}).sort({date: -1});
        res.json(income);
    } catch(error){
        res.status(500).json({ message: "Server Error"});
    }
};

//Delete income source
exports.downloadIncomeExcel = async (req, res) => {
    const userId = req.user.id;
    try{
        const income = await Income.find({userId}).sort({date: -1});

        //prepare data for excel
        const data = income.map((item)=> ({
            Source: item.source,
            Amount: item.amount,
            Date: item.date,
        }));

        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb,ws,"Income");
        xlsx.writeFile(wb, "income_details.xlsx");
        res.download("income_details.xlsx");
    }catch (error){
        res.status(500).json({message: "Server Error", err: error.message});
    }
}

//Download Excel
exports.deleteIncome = async (req, res) => {
    try{
        await Income.findByIdAndDelete(req.params.id);
        res.json({message: "Income Deleted Successfully"});
    } catch(error){
        res.status(500).json({message: "Server Error"});
    }
};

