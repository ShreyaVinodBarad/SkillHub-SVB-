import React from 'react'

const Button = ({ children, varient }) => {
    return (
        <div>
            <button
                type="button"
                class={`btn btn-${varient} w-25 mt-3`}
            >
                {children}
            </button>
        </div >
    )
}

export default Button