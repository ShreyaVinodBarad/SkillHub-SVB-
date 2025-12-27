import React from 'react'

const Input = ({ label, placeholder, type, className, validFeedback, invalidFeedback }) => {
    return (
        <div>
            <label htmlFor="" className="form-label mt-3">{label}</label>
            <input type={type} className={className} placeholder={placeholder} />
            <div className='valid-feedback'>
                {validFeedback}
            </div>
            <div className='invalid-feedback'>
                {invalidFeedback}
            </div>
        </div>
    )
}

export default Input