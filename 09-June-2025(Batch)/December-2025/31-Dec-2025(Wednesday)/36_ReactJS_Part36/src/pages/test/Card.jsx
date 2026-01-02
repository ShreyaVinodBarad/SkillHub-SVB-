import React from 'react'

const Card = ({ children }) => {
    return (
        <div>
            <div className="card">
                {children}
            </div>
        </div>
    )
}
// Functions are treated as objects in JS
// Create key named Header
Card.Header = ({ children }) => {
    return <div className='card-header'>{children}</div>
}

Card.Body = ({ children }) => {
    return <div className='card-body'>{children}</div>
}

Card.Footer = ({ children }) => {
    return <div className='card-footer'>{children}</div>
}

export default Card