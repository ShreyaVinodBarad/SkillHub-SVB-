import React from 'react'

const Card = ({ children, title, footer }) => {
    return (
        <div>
            <div class="card">
                <div class="card-header">{title}</div>
                <div class="card-body">{children}</div>
                <div class="card-footer">{footer}</div>
            </div>
        </div>
    )
}

export default Card