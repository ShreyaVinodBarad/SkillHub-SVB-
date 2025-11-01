import React, { useState } from 'react'

const BudgetTracker = () => {
    let [title, setTitle] = useState("")
    let [amount, setAmount] = useState(0)
    let [type, setType] = useState("")
    let [category, setCategory] = useState("")
    let [note, setNote] = useState("")
    let [bank, setBank] = useState([])
    let [income, setIncome] = useState(0)
    let [expense, setExpense] = useState(0)
    let [balance, setBalance] = useState(0)
    const handleClick = () => {
        const obj = { title, amount, type, category, note }
        // setBank([obj, ...bank])

        const allData = [obj, ...bank]

        const incomeAmt = allData.filter(item => item.type === "income").reduce((sum, item) => sum + item.amount, 0)

        const expenseAmt = allData.filter(item => item.type === "expense").reduce((sum, item) => sum + item.amount, 0)

        const balanceAmt = incomeAmt - expenseAmt

        setBank(allData)
        setIncome(incomeAmt)
        setExpense(expenseAmt)
        setBalance(balanceAmt)

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
                        <div className="card">
                            <div className="card-header alert alert-warning text-center"><h2>Budget Tracker</h2></div>
                            <div className="card-body">
                                <div className="row mt-2">
                                    <div className="col-sm-6 mb-3">
                                        <input type="text" className='form-control ' placeholder='Enter Title...' onChange={event => setTitle(event.target.value)} value={title} />
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <input type="number" className='form-control' placeholder='Enter Amount...' onChange={event => setAmount(+event.target.value)} value={amount} />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-sm-6 mb-3">
                                        <select className='form-control' onChange={event => setType(event.target.value)} value={type}>
                                            <option value="">Choose Type</option>
                                            <option value="income">Income</option>
                                            <option value="expense">Expense</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <select className='form-control' onChange={event => setCategory(event.target.value)} value={category}>
                                            <option value="">Choose Category</option>
                                            <option value="food">Food</option>
                                            <option value="transport">Transport</option>
                                            <option value="rent">Rent</option>
                                            <option value="salary">Salary</option>
                                            <option value="investment">
                                                Investment
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <textarea className='form-control mt-2' placeholder='Enter Note...' onChange={event => setNote(event.target.value)} value={note}></textarea>
                                <button type="button" class="btn btn-primary w-100 mt-3" onClick={handleClick}>Add</button>
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
                                        <div class="card">
                                            <div class="card-body alert alert-success mb-0">
                                                <h4>Income</h4>
                                                <h4>{income}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div class="card">
                                            <div class="card-body alert alert-danger mb-0">
                                                <h4>Expense</h4>
                                                <h4>{expense}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div class="card">
                                            <div class="card-body alert alert-primary mb-0">
                                                <h4>Balance</h4>
                                                <h4>{balance}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-sm-8 offset-sm-2">
                        <table className='table table-bordered'>
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
                                    bank.map(item =>
                                        <tr>
                                            <td>{item.title}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.type}</td>
                                            <td>{item.category}</td>
                                            <td>{item.note}</td>
                                        </tr>
                                    )
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