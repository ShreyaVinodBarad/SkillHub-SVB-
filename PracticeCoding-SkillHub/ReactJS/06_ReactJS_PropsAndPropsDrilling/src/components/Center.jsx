import React from 'react'

const Center = ({ children, className }) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className={`col-sm-6 offset-sm-3 ${className}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Center