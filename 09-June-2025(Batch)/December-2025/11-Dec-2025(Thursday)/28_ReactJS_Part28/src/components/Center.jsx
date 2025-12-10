import React from 'react'

const Center = ({ children }) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Center