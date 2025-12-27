import React from 'react'

const Input = (
    {
        label,
        placeholder,
        type,
        className,
        validFeedback,
        invalidFeedback,
        varient = "floating",
        ...other
    }
) => {
    switch (varient) {
        case "normal": return (
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
        case "floating": return <div class="form-floating mb-3">
            <input type={type} className={className} placeholder={placeholder} {...other} />
            <label htmlFor="">{label}</label>
            <div className='valid-feedback'>
                {validFeedback}
            </div>
            <div className='invalid-feedback'>
                {invalidFeedback}
            </div>
        </div>
        default: break
    }

}

export default Input