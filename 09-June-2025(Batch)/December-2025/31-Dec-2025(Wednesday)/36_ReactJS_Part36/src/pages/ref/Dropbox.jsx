import React, { useRef, useState } from 'react'

const Dropbox = () => {
    const drop = useRef()
    const fancyCheckbox = useRef()
    const [isChecked, setIsChecked] = useState(false)

    const handleClick = () => {
        // console.log("Click")
        drop.current.click()
    }
    return (
        <div className='container'>
            <input type="file" ref={drop} className='d-none' />
            <div className='alert alert-primary my-3 mx-4' onClick={handleClick}>
                <div style={{ height: "100px", border: "2px solid black", borderRadius: "10px" }}></div>
            </div>
            <input type="checkbox" ref={fancyCheckbox} className='d-none' />
            <div
                style={{ width: "60px", height: "30px", color: "white" }}
                className='bg-success'
                onClick={() => {
                    fancyCheckbox.current.checked = !fancyCheckbox.current.checked
                    setIsChecked(fancyCheckbox.current.checked)
                }}
            >
                {isChecked ? "ON" : "OFF"}
            </div>
        </div>
    )
}

export default Dropbox