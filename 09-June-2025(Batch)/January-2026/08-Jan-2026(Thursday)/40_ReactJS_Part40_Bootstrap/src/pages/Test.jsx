import React from 'react'

const Test = () => {
    return (
        <div>
            <h1>
                Test Page
            </h1>
            <Button varient={"red"}>Hello</Button>
            <Button varient={"blue"}>World</Button>

            <Card header={"Learning ReactJS"} footer={"By SkillHub"}>
                <h1>Hello World!</h1>
            </Card>
        </div>
    )
}
const Button = ({ varient, children }) => {
    return <button style={{ backgroundColor: varient }}>{children}</button>
}

const Card = ({ header, children, footer }) => {
    return <div class="card">
        <div class="card-header">{header}</div>
        <div class="card-body">{children}</div>
        <div class="card-footer">{footer}</div>
    </div>
}

export default Test