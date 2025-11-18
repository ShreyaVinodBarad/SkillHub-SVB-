import React, { useEffect, useState } from 'react'

const BudgetTracker = () => {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState("")
    const [category, setCategory] = useState("")
    const [note, setNote] = useState("")
    const [bank, setBank] = useState([])
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    const [balance, setBalance] = useState(0)

    const handleAdd = () => {
        const obj = { title, amount, type, category, note }
        // setBank([obj, ...bank]) => Not gets updated quickly, and if used this we get old data which can change the expected result.

        const allData = [obj, ...bank]
        // 👆 allData is created you get the current updated entry in the array.

        const incomeAmt = allData
            .filter(item => item.type === "Income")
            .reduce((sum, item) => sum + item.amount, 0)

        const expenseAmt = allData
            .filter(item => item.type === "Expense")
            .reduce((sum, item) => sum + item.amount, 0)

        const balanceAmt = incomeAmt - expenseAmt

        setBank(allData)
        setIncome(incomeAmt)
        setExpense(expenseAmt)
        setBalance(balanceAmt)

        reset()
    }

    const reset = () => {
        setTitle("")
        setAmount(0)
        setType("")
        setCategory("")
        setNote("")
    }

    /*
    useEffect(() => {
        console.log("Updated bank!", bank)
    }, [bank])
    */
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <div class="card">
                            <div class="card-header alert alert-warning fs-4 text-center">
                                Budget Tracker
                            </div>
                            <div class="card-body">

                                <input
                                    type="text"
                                    placeholder='Enter Title...'
                                    className='form-control'
                                    onChange={event => setTitle(event.target.value)}
                                    value={title}
                                />

                                <input
                                    type="number"
                                    placeholder='Enter Amount...'
                                    className='form-control mt-3'
                                    onChange={event => setAmount(+event.target.value)}
                                    value={amount}
                                />

                                <select
                                    class="form-select mt-3"
                                    onChange={event => setType(event.target.value)}
                                    value={type}
                                >
                                    <option value="">Choose Type</option>
                                    <option value="Income">Income</option>
                                    <option value="Expense">Expense</option>
                                </select>

                                <select
                                    class="form-select mt-3"
                                    onChange={event => setCategory(event.target.value)}
                                    value={category}
                                >
                                    <option value="">Choose Category</option>
                                    <option value="Food">Food</option>
                                    <option value="Tranport">Tranport</option>
                                    <option value="Rent">Rent</option>
                                    <option value="Salary">Salary</option>
                                    <option value="Investment">
                                        Investment
                                    </option>
                                </select>

                                <textarea
                                    placeholder='Enter Note...'
                                    className='form-control mt-3'
                                    onChange={event => setNote(event.target.value)}
                                    value={note}
                                ></textarea>

                                <button
                                    type="button"
                                    class="btn btn-primary mt-3 w-100"
                                    onClick={handleAdd}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm-8 offset-sm-2">
                        <div class="card">
                            <div class="card-body">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div class="card h-100">
                                            <div class="card-body alert alert-success mb-0 text-center">
                                                <span className='fs-4'>
                                                    Income: {income}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div class="card h-100">
                                            <div class="card-body alert alert-danger mb-0 text-center">
                                                <span className='fs-4'>
                                                    Expense: {expense}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div class="card h-100">
                                            <div class="card-body alert alert-warning mb-0 text-center">
                                                <span className='fs-4'>
                                                    Balance: {balance}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table class="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Amount</th>
                                    <th>Type</th>
                                    <th>Category</th>
                                    <th>Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bank.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.title}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.type}</td>
                                            <td>{item.category}</td>
                                            <td>{item.note}</td>
                                        </tr>
                                    })
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