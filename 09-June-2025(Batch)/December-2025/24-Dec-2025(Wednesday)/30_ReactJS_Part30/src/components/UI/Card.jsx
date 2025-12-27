import React from 'react'

const Card = ({ header, footer, children, showHeader = true, showFooter = true }) => {
    return (
        <div>
            <div class="card">
                {
                    showHeader && <div class="card-header alert alert-warning fs-3 text-center">{header}</div>
                }
                <div class="card-body">{children}</div>
                {
                    showFooter && <div class="card-footer">{footer}</div>
                }
            </div>
        </div>
    )
}

export default Card