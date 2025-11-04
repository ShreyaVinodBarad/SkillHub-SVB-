import React from 'react'
import LearnProps from './components/LearnProps'
import PracticeProps from './components/PracticeProps'
import PropsChild from './components/PropsChild'

const App = () => {
  const countryArr = ["India", "USA", "China"]
  const studObj = { name: "Gouri Barad", city: "Chhatrapati Sambhaji Nagar" }
  const handleClick = () => console.log("Hello World!")
  return (
    <div>
      {/* 
       👇 Function Call 
                  👇 Props = Function Argument  👇  
      */}
      <LearnProps name="Shreya Vinod Barad" age={22} />
      <PracticeProps
        brand="Dell"
        country="USA"
        est="1985"
        countryArr={countryArr}
        studData={studObj}
        handleBtn={handleClick}
      />
      {/* 👆 It's Interpolation */}
      <PropsChild>
        <h1>Hello, learning Props!</h1>
        {/* 👆 Children Prop */}
      </PropsChild>
    </div>
  )
}

export default App