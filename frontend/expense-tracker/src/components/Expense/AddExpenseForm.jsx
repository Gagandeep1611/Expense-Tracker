import React, { useState } from 'react'
import Input from '../Inputs/Input';

const AddExpenseForm = ({ onAddExpense }) => {
    const [expense, setExpense] = useState({
        category: "",
        amount: "",
        date: "",
    });

    const handleChange = (key, value) => setExpense({ ...expense, [key]: value });

    return (
        <div>
            <h5 className='text-black dark:text-white'>Expense Category</h5>
            <Input
                value={expense.category}
                onChange={({ target }) => handleChange("category", target.value)}
                placeholder="Groceries, Insurance, etc."
                type="text"
            />
            <h5 className='text-black dark:text-white'>Amount</h5>
            <Input
                value={expense.amount}
                onChange={({ target }) => handleChange("amount", target.value)}
                placeholder=""
                type="number"
            />
            <h5 className='text-black dark:text-white'>Date</h5>
            <Input
                value={expense.date}
                onChange={({ target }) => handleChange("date", target.value)}
                placeholder=""
                type="date"
            />
            <div className='flex justify-end mt-6'>
                <button type='button'
                    className='add-btn add-btn-fill'
                    onClick={() => onAddExpense(expense)}>
                    Add Expense
                </button>
            </div>


        </div>
    )
}

export default AddExpenseForm
