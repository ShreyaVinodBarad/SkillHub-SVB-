import React from 'react'
import Component01 from './components/Component01'

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>Let's start learning ReactJS!</h2>
      <Component01 />
    </div>
  )
}

export default App
/*
1) React Component Structure: return() and <div>
- We use return() in React because it tells the component what to show on the screen (the UI).
- The <div> tag is used to wrap multiple elements (like <h1> and <h3>), because React components must return only one main element.
a) In short:
return() → shows what the component displays.
<div> → holds all the tags together as one parent.
----------------------------------------------------------
2) Creating a Plain White Page in React
- Go to your project’s index.css file.
- Delete all the default CSS code inside it.
- Now your React page will be plain white, and all text will appear black by default (browser’s default style).
a) Result:
A clean white page with simple black text.
----------------------------------------------------------
3) What is App.js / App.jsx in React?
- App.js is the main component of a React app.
a) Important points:
- It’s the starting file where your main code runs.
- It connects all other components together.
- It decides what to show on the screen.
- Written using JSX (HTML + JavaScript).
- Exported as default so it can be used in index.js.
b) In simple words:
App.js is the heart of your React app.
----------------------------------------------------------
4) Components in ReactJS
- Components are small, reusable pieces of code in React that build the UI (User Interface).
- Each component works like a small function that returns HTML using JSX.
a) Important Points:
- Building Blocks: Components are the main parts that make a React app.
- Reusable: You can use one component many times in your app.
- Return JSX: Components return HTML-like code called JSX.
- File Name Rule: Component files start with a capital letter, e.g., App.js, Header.js.
b) In short:
Components = Small, reusable code blocks that return JSX and make React apps easy to build and manage.
----------------------------------------------------------
5) Creating and Using a Component in React
- Create a new component file inside the src folder, e.g. MyComponent.jsx or MyComponent.js.
- Write the component code.
- Import the component in App.js:
import defaultComponent, { namedComponent } from './fileName';
- Use the component inside App function:
<MyComponent />
a) Important Points:
- Each component must start with a capital letter (like MyComponent).
- Always export your component so it can be imported.
- Use import statement to bring it into other files.
- Use component like an HTML tag.
----------------------------------------------------------
6) What is JSX in React?
- JSX (JavaScript XML) is a file extension (.jsx) used in React to write HTML-like code inside JavaScript.
a) Important Points:
- Meaning: JSX lets you write HTML code in JavaScript files.
- Extension: The file name ends with .jsx (like App.jsx).
- Purpose: It makes React code easier to read and write.
- Behind the scenes: JSX is converted (transpiled) into normal JavaScript by tools like Babel.
b) Advantages:
- Easier to understand UI structure
- Combines HTML and JS logic in one file
- Reduces coding mistakes
c) Optional:
- You can use .js instead of .jsx, but .jsx helps others know that file contains JSX code.
d) In short:
JSX = HTML inside JavaScript → makes React UI easy to build and understand.
----------------------------------------------------------
7) rafce Shortcut in React
- rafce stands for React Arrow Function Component Export.
- It’s a shortcut in VS Code (with ES7+ React/Redux extension) to quickly create a React functional component.
a) Important Points:
- Creates a ready-to-use React component.
- Saves time — no need to type full boilerplate code.
- Works only if you install the ES7+ React/Redux/React-Native snippets extension.
b) Example:
Typing rafce in App.js → press Enter → instantly creates a functional component named App.
----------------------------------------------------------
*/ 