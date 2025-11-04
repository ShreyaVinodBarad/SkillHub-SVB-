import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = ({ brandName, count, setCount }) => {
    return (
        <div>
            <h5>{brandName}</h5>
            <ChildComponent brandName={brandName} count={count}>
            </ChildComponent>
            {/* <h5 className='alert alert-success  w-25 text-center'>{count}</h5> */}
            <div className="btn-group mx-2" role="group">
                <button className='btn btn-danger' onClick={() => setCount(count - 1)}>
                    -1
                </button>
                <button type="button" className="btn btn-light">{count}</button>
                <button className='btn btn-success' onClick={() => setCount(count + 1)}>
                    +1
                </button>
            </div>
        </div>
    )
}

export default ParentComponent