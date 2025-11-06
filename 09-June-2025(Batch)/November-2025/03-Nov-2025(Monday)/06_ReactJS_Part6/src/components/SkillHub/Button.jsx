import React, { Children } from 'react'

const Button = ({ children, varient }) => {
    return (
        <div>
            {/* <button type="button" className="btn btn-primary">Hello</button> */}
            <button type="button" className={`btn btn-${varient} my-2`}>{children}</button>
        </div >
    )
}

export default Button