import React from 'react'

const PracticeProps = ({ brand, country, est, countryArr, studObj, handleClick }) => {
    return (
        <div>
            <h2>Brand: {brand}</h2>
            <h2>Country: {country}</h2>
            <h2>Est: {est}</h2>
            {
                countryArr.map(item => <h2>{item}</h2>)
            }
            <h2>{studObj.name}</h2>
            <h2>{studObj.age}</h2>
            <button onClick={handleClick}>
                Click Me!
            </button>
        </div>
    )
}

export default PracticeProps