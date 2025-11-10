import React, { useState } from 'react'

const Calculator = () => {
    let [res, setRes] = useState(0)
    let [num1, setNum1] = useState(0)
    let [num2, setNum2] = useState(0)
    let [operator, setOperator] = useState("")
    const handleCal = () => {
        if (operator === "+") {
            setRes(+num1 + +num2)
        }
        else if (operator === "-") {
            setRes(+num1 - +num2)
        }
        else if (operator === "*") {
            setRes(+num1 * +num2)
        }
        else if (operator === "/") {
            setRes(+num1 / +num2)
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div class="card">
                            <div class="card-header alert alert-success text-center">
                                <h2>
                                    Calculator
                                </h2>
                            </div>
                            <div class="card-body">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3>{res}</h3>
            <input
                type="number"
                onChange={event => setNum1(event.target.value)}
            />
            <input
                type="number"
                onChange={event => setNum2(event.target.value)}
            />
            <select class="form-select" onChange={event => setOperator(event.target.value)}>
                <option value="">Operator</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <button type="button" class="btn btn-primary" onClick={handleCal}>
                Calculate
            </button>
        </div>
    )
}

export default Calculator