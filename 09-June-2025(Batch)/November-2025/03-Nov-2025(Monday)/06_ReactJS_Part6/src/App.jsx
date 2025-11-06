import React from 'react'
import LearnProps from './components/SkillHub/LearnProps'
import PracticeProps from './components/SkillHub/PracticeProps'
import PropsChild from './components/SkillHub/PropsChild'
import Button from './components/SkillHub/Button'
import Center from './components/SkillHub/Center'
import Card from './components/SkillHub/Card'
import LearnPropsDrilling from './components/SkillHub/LearnPropsDrilling'
import { ChildA } from './components/YouTube/ChildA'

const App = () => {
  const countryArr = ["India", "USA", "China"]
  const studObj = { name: "Gouri Barad", city: "Chhatrapati Sambhaji Nagar" }
  const handleClick = () => console.log("Hello World!")
  // YouTube 👇
  const name = "Shreya Vinod Barad"
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

      <Button varient="success">Submit</Button>
      <Button varient="danger">Reset</Button>
      <Center>
        <div className="alert alert-success">Hello World!</div>
      </Center>

      <Center>
        <div class="card">
          <div class="card-header">header</div>
          <div class="card-body">body</div>
          <div class="card-footer">footer</div>
        </div>
      </Center>
      <Center>
        <Card title="What is your name?" footer="Card">
          Shreya Barad
        </Card>
      </Center>

      <LearnPropsDrilling></LearnPropsDrilling>

      {/* YouTube 👇 */}
      <ChildA name={name} />
    </div>
  )
}

export default App