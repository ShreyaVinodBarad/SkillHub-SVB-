import React from 'react'
import LearnProps from './components/LearnProps'
import PracticeProps from './components/PracticeProps'
import ChildrenProp from './components/ChildrenProp'
import Button from './components/Button'
import Center from './components/Center'
import Card from './components/Card'
import LearnPropsDrilling from './components/LearnPropsDrilling'

const App = () => {
  const countryArr = ["USA", "India", "China"]
  const studObj = { name: "Shreya Barad", age: 22, city: "CSN" }
  const handleClick = () => console.log("Hello! I am learning ReactJS.")
  return (
    <div>
      {/* 
      👇 Function Call
                    👇 Function Argument = Props
      */}
      <LearnProps name="Shreya" age="22" />

      <PracticeProps
        brand="Dell"
        country="USA"
        est="1985"
        countryArr={countryArr}
        studObj={studObj}
        handleClick={handleClick}
      />

      <ChildrenProp>
        <h1>Hello! Learning Props.</h1>
      </ChildrenProp>

      <Button varient="success">Submit</Button>
      <Button varient="warning">Reset</Button>

      <Center className="alert alert-success">
        Hello World!
      </Center>

      <Center>
        <Card header="What is your name?" footer="I am MCA Graduate!">
          Shreya .V. Barad
        </Card>
      </Center>

      <LearnPropsDrilling></LearnPropsDrilling>
    </div>
  )
}

export default App