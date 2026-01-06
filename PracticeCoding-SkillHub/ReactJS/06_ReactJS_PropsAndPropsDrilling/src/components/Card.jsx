import React from 'react'

const Card = ({ header, children, footer }) => {
    return (
        <div>
            <div class="card">
                <div class="card-header">{header}</div>
                <div class="card-body">{children}</div>
                <div class="card-footer">{footer}</div>
            </div>
        </div>
    )
}

export default Card