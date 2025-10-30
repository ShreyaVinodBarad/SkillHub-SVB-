import React, { useState } from 'react'

const Calculator = () => {
    // let num1, num2
    let [result, setResult] = useState(0)
    let [num1, setNum1] = useState(0)
    let [num2, setNum2] = useState(0)
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header alert alert-primary fs-3 text-center fw-bold">Calculator</div>
                        <div className="card-body">
                            <h2 className='alert alert-success text-center fs-2 fw-bold'>{result}</h2>
                            <input type="number" onChange={event => setNum1(+event.target.value)} className='form-control mb-3' />
                            <input type="number" onChange={event => setNum2(+event.target.value)} className='form-control mb-3' />
                            <div className="btn-group w-100">
                                <button onClick={() => setResult(num1 + num2)} className='btn btn-warning'>+</button>
                                <button onClick={() => setResult(num1 - num2)} className='btn btn-success'>-</button>
                                <button onClick={() => setResult(num1 * num2)} className='btn btn-danger'>*</button>
                                <button onClick={() => setResult(num1 / num2)} className='btn btn-secondary'>/</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator
/*
1) How to use Bootstrap in ReactJS
- Go to the official Bootstrap website.
- Copy the CDN link (both the <link> and <script> tags).
- Open your React project and go to the public/index.html file.
- Paste the Bootstrap <link> tag below the <title> tag.
- Paste the Bootstrap <script> tag above the existing script tag (usually before </body>).
- Now you can use Bootstrap classes and components directly in your React code.
*/ 