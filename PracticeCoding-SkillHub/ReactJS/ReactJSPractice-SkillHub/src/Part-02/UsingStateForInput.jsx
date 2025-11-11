import React, { useState } from 'react'

const UsingStateForInput = () => {
    let [name, setName] = useState("")
    return (
        <div>
            {name}
            <input
                type="text"
                onChange={event => setName(event.target.value)}
            />
        </div>
    )
}

export default UsingStateForInput