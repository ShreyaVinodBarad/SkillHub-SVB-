import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = ({ brand, count, setCount }) => {
    return (
        <div>
            <h1>
                Parent Component
            </h1>
            <ChildComponent count={count} brand={brand} />
            <h2>{brand}</h2>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-success" onClick={() => setCount(count + 1)}>
                    +1
                </button>
                <button type="button" class="btn btn-primary">
                    {count}
                </button>
                <button type="button" class="btn btn-danger" onClick={() => setCount(count - 1)}>
                    -1
                </button>
            </div>
        </div>
    )
}

export default ParentComponent