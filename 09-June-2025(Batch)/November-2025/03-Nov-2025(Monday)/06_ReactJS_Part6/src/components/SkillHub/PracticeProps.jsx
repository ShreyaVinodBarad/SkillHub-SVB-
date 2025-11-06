import React from 'react'

const PracticeProps = ({ brand, country, est, countryArr, studData, handleBtn }) => {
    return (
        <div>
            <h5>{brand}</h5>
            <h5>{country}</h5>
            <h5>{est}</h5>
            <h5>{countryArr}</h5>
            {
                countryArr.map(item => <h5>{item}</h5>)
            }
            <h5>{studData.name}</h5>
            <h5>{studData.city}</h5>
            <button onClick={handleBtn}>Click Me</button>
        </div>
    )
}

export default PracticeProps