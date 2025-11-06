import React from 'react'

const PropsChild = props => {
    return (
        <div>
            <h5>{props.children}</h5>
        </div>
    )
}

export default PropsChild
/*
1) In React, props.children is a special prop that shows the content written inside a component’s opening and closing tags.
-----------------------------------------------------------------
2) In ReactJS, child props (or children) are the data or elements you put between a component’s opening and closing tags.
- Example:
<Wrapper>
  <p>Hello World</p>
</Wrapper>
- Here, <p>Hello World</p> is the child prop of Wrapper.
- You can access it using props.children.
-----------------------------------------------------------------
*/ 