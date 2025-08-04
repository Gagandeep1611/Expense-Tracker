import React, { useState } from 'react'
import Input from '../Inputs/Input';

const AddIncomeForm = ({ onAddIncome }) => {
    const [income, setIncome] = useState({
        source: "",
        amount: "",
        date: "",
    });

    const handleChange = (key, value) => setIncome({ ...income, [key]: value });

    return (
        <div>
            <h5 className='text-black dark:text-white'>Income Source</h5>
            <Input
                value={income.source}
                onChange={({ target }) => handleChange("source", target.value)}
                placeholder="Freelance, Salary, etc"
                type="text"
            />
            <h5 className='text-black dark:text-white'>Amount</h5>
            <Input
                value={income.amount}
                onChange={({ target }) => handleChange("amount", target.value)}
                placeholder=""
                type="number"
            />
            <h5 className='text-black dark:text-white'>Date</h5>
            <Input
                value={income.date}
                onChange={({ target }) => handleChange("date", target.value)}
                placeholder=""
                type="date"
            />
            <div className='flex justify-end mt-6'>
                <button type='button'
                    className='add-btn add-btn-fill'
                    onClick={() => onAddIncome(income)}>
                    Add Income
                </button>
            </div>


        </div>
    )
}

export default AddIncomeForm
