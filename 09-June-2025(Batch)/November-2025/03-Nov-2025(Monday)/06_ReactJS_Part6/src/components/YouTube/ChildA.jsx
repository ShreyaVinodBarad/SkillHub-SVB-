import React from 'react'
import ChildB from './ChildB'

export const ChildA = ({ name }) => {
    return (
        <div>
            <h3>ChildA</h3>
            <ChildB name={name} />
        </div>
    )
}

