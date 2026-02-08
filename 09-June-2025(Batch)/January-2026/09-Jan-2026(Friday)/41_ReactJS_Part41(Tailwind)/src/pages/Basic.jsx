import React from 'react'

const Basic = () => {
    return (
        <div>
            {
                ["bg-red-50", "bg-red-100", "bg-red-200", "bg-red-300", "bg-red-400", "bg-red-500", "bg-red-600", "bg-red-700", "bg-red-800", "bg-red-900", "bg-red-950"].map(item => <h4 key={item} className={item}>
                    Lorem ipsum dolor sit amet consectetur.
                </h4>
                )
            }
            <button className='border-4 border-amber-600 px-4 py-2 hover:bg-amber-800 hover:text-white'>
                Hello! World.
            </button>
        </div>
    )
}

export default Basic