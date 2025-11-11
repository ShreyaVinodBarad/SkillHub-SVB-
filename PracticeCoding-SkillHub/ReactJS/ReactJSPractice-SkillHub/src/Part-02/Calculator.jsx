import React, { useState } from 'react'

const Calculator = () => {
    let [res, setRes] = useState("")
    let [num1, setNum1] = useState("")
    let [num2, setNum2] = useState("")
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
            if (+num2 === 0) {
                setRes("Cannot Divide by Zero!")
            }
            else {
                setRes(+num1 / +num2)
            }
        }
        inpReset()
    }
    const inpReset = () => {
        setNum1("")
        setNum2("")
        setOperator("")
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
                                <input
                                    type="number"
                                    onChange={event => setNum1(event.target.value)}
                                    className='form-control'
                                    placeholder='Enter Number...'
                                    value={num1}
                                />
                                <input
                                    type="number"
                                    onChange={event => setNum2(event.target.value)}
                                    className='form-control mt-3'
                                    placeholder='Enter Number...'
                                    value={num2}
                                />
                                <select class="form-select mt-3" onChange={event => setOperator(event.target.value)} value={operator}>
                                    <option value="">Operator</option>
                                    <option value="+">+</option>
                                    <option value="-">-</option>
                                    <option value="*">*</option>
                                    <option value="/">/</option>
                                </select>
                                <button type="button" class="btn btn-primary w-100 mt-3" onClick={handleCal}>
                                    Calculate
                                </button>
                            </div>
                        </div>
                        <h3 className='alert alert-success fs-3 text-center mt-3'>
                            {res}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator