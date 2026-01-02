import React, { memo } from 'react'

const Test = ({ brand }) => {
    console.log("Test Component")
    return (
        <div>
            {brand}
        </div>
    )
}

export default memo(Test)