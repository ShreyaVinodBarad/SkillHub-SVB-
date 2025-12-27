import React from 'react'

const Center = ({ col = 8, offset = 2, children }) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className={`col-sm-${col} offset-sm-${offset}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Center