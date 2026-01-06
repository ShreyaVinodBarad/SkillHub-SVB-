import React, { useState } from 'react'

const BudgetTracker = () => {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState("")
    const [category, setCategory] = useState("")
    const [note, setNote] = useState("")
    const [bank, setBank] = useState([
        /*
        {
            title: "Microsoft Salary",
            amount: 95000,
            type: "Income",
            category: "Salary",
            note: "Software Development Project"
        },
        {
            title: "Birthday Party",
            amount: 2000,
            type: "Expense",
            category: "Food",
            note: "Sister's Birthday Party"
        },
        */
    ])

    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    const [balance, setBalance] = useState(0)

    const handleAddBtn = () => {
        const obj = { title, amount, type, category, note }
        const allData = [...bank, obj]
        setBank(allData)

        // Total Income Amt
        const incomeAmt = allData
            .filter(item => item.type === "Income")
            .reduce((sum, item) => sum + item.amount, 0)

        // Total Expense Amt
        const expenseAmt = allData
            .filter(item => item.type === "Expense")
            .reduce((sum, item) => sum + item.amount, 0)

        // Total Balance Amt
        const balanceAmt = incomeAmt - expenseAmt

        setIncome(incomeAmt)
        setExpense(expenseAmt)
        setBalance(balanceAmt)

        // Reset Input Fields 👇
        setTitle("")
        setAmount(0)
        setType("")
        setCategory("")
        setNote("")
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <div class="card mt-3">
                            <div class="card-header alert alert-warning fs-3 text-center">
                                Budget Tracker
                            </div>
                            <div class="card-body">
                                <input
                                    type="text"
                                    placeholder='Enter title...'
                                    onChange={event => setTitle(event.target.value)}
                                    className='form-control'
                                    value={title}
                                />

                                <input
                                    type="number"
                                    placeholder='Enter Amount...'
                                    onChange={event => setAmount(+event.target.value)}
                                    className='form-control mt-3'
                                    value={amount}
                                />

                                <div className="row mt-3">
                                    <div className="col-sm-6">
                                        <select
                                            class="form-select"
                                            onChange={event => setType(event.target.value)}
                                            value={type}
                                        >
                                            <option selected>
                                                Choose Type
                                            </option>
                                            <option value="Income">
                                                Income
                                            </option>
                                            <option value="Expense">
                                                Expense
                                            </option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <select
                                            class="form-select"
                                            onChange={event => setCategory(event.target.value)}
                                            value={category}
                                        >
                                            <option selected>
                                                Choose Category
                                            </option>
                                            <option value="Food">
                                                Food
                                            </option>
                                            <option value="Transport">
                                                Transport
                                            </option>
                                            <option value="Rent">
                                                Rent
                                            </option>
                                            <option value="Salary">
                                                Salary
                                            </option>
                                            <option value="Investment">
                                                Investment
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <textarea
                                    class="form-control mt-3"
                                    placeholder='Enter Note...'
                                    onChange={event => setNote(event.target.value)}
                                    value={note}
                                >
                                </textarea>

                                <button
                                    type="button"
                                    class="btn btn-primary mt-3 w-100"
                                    onClick={handleAddBtn}
                                >
                                    Add
                                </button>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-sm-4">
                                <div class="card h-100">
                                    <div class="card-body alert alert-success mb-0">
                                        <h2>Income</h2>
                                        <h4>{income}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div class="card h-100">
                                    <div class="card-body alert alert-danger mb-0">
                                        <h2>Expense</h2>
                                        <h4>{expense}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div class="card h-100">
                                    <div class="card-body alert alert-warning mb-0">
                                        <h2>Balance</h2>
                                        <h4>{balance}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <table class="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Amount</th>
                                    <th>Type</th>
                                    <th>Category</th>
                                    <th>Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bank.map(item => <tr>
                                        <td>{item.title}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.type}</td>
                                        <td>{item.category}</td>
                                        <td>{item.note}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BudgetTracker