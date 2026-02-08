import React from 'react'

const Basic = () => {
    return (
        <div>
            {
                ["alert-info", "alert-success", "alert-warning", "alert-error"].map(item => <div className={`alert ${item}`}>
                    <span>
                        12 unread messages. Tap to see.
                    </span>
                </div>)
            }

            {/* 📌 Outline Alert and Dashed Alert */}

            <button className='btn btn-primary'>Primary Button</button>

        </div >
    )
}

export default Basic