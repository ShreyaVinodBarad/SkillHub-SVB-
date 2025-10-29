import Component_01 from "./Component_01"
const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <h3>ReactJS</h3>
      <Component_01 />
    </div>
  )
}
export default App
/*
1) return and div tag
- We use return() in React because it tells the component what to show on the screen (the UI).
- The <div> tag is used to wrap multiple elements (like <h1> and <h3>), because React components must return only one main element.
- In short:
a) return() → shows what the component displays.
b) <div> → holds all the tags together as one parent.
---------------------------------------------------------------------
2) How to Get a Basic White Page with Black Text in React
- Go to your project’s index.css file.
- Delete all the default CSS code inside it.
- Now your React page will be plain white, and all text will appear black by default (browser’s default style).
- Result: A clean white page with simple black text.
---------------------------------------------------------------------
3) What is App.js in React?
- App.js is the main component of a React app.
- Important points:
a) It’s the starting file where your main code runs.
b) It connects all other components together.
c) It decides what to show on the screen.
d) Written using JSX (HTML + JavaScript).
e) Exported as default so it can be used in index.js. 
- In simple words: App.js is the heart of your React app.
---------------------------------------------------------------------
4) What are Components in ReactJS?
- Components are small, reusable pieces of code in React that build the UI (User Interface).
- Each component works like a small function that returns HTML using JSX.
- Important Points:
a) Building Blocks:
Components are the main parts that make a React app.
b) Reusable:
You can use one component many times in your app.
c) Return JSX:
Components return HTML-like code called JSX.
d) File Name Rule:
Component files start with a capital letter, e.g., App.js, Header.js.
- In short:
Components = Small, reusable code blocks that return JSX and make React apps easy to build and manage.
---------------------------------------------------------------------
5) How to Make a Component and Use It in App.js
a) Create a New Component File
- Inside the src folder, make a new file, e.g. MyComponent.jsx or MyComponent.js.
b) Write the Component Code
c) Import the Component in App.js
- Open App.js and write:
import defaultComponent, {namedComponent} from './fileName';
d) Use the Component Inside App Function
<MyComponent /> => using the component
e) Important Points:
- Each component must start with a capital letter (like MyComponent).
- Always export your component so it can be imported.
- Use import statement to bring it into other files.
- Use component like an HTML tag: <MyComponent />.
---------------------------------------------------------------------
6) What is JSX Extension in React?
- JSX (JavaScript XML) is a file extension (.jsx) used in React to write HTML-like code inside JavaScript.
- Important Points:
a) Meaning: JSX lets you write HTML code in JavaScript files.
b) Extension: The file name ends with .jsx (like App.jsx).
c) Purpose: It makes React code easier to read and write.
d) Behind the scenes: JSX is converted (transpiled) into normal JavaScript by tools like Babel.
e) Advantages:
- Easier to understand UI structure
- Combines HTML and JS logic in one file
- Reduces coding mistakes
f) Optional: You can use .js instead of .jsx, but .jsx helps others know that file contains JSX code.
- In short:
JSX = HTML inside JavaScript → makes React UI easy to build and understand.
---------------------------------------------------------------------
7) What is rafce Shortcut in React?
- rafce stands for React Arrow Function Component Export.
- It’s a shortcut in VS Code (with ES7+ React/Redux extension) to quickly create a React functional component.
- Important Points:
a) Creates a ready-to-use React component.
b) Saves time — no need to type full boilerplate code.
c) Works only if you install the ES7+ React/Redux/React-Native snippets extension.
- Example:
Typing rafce in App.js → press Enter → instantly creates a functional component named App.
---------------------------------------------------------------------
8) Using Variables in React
- You can show (display) variables inside JSX using curly braces {}. 
- Rules
a) You can use any JavaScript variable in JSX using {}.
b) Variables should be declared before return().
c) You can use them in expressions, like:
<p>Next year age: {age + 1}</p>
---------------------------------------------------------------------
9) Why Objects Cannot Be Printed Using {obj} in ReactJS
a) React can show only readable values
- React can directly display strings, numbers, or JSX inside {}.
Example: {name} or {age} works fine.
b) Objects are not directly readable
- When you write {obj}, React doesn’t know how to show an entire object — it’s not a string or number.
- So, it gives an error like:
“Objects are not valid as a React child”
- In short:
React can’t directly display objects because they aren’t text.
---------------------------------------------------------------------
10) map() in ReactJS
- We use the map() function to take every value separately from an array and display it in ReactJS.
- Purpose:
map() helps to loop through an array and return something for each item (like HTML or JSX).
- In short:
map() = used to take each value from an array → make elements → show them easily in React JSX.
---------------------------------------------------------------------
11) What is Interpolation in ReactJS?
- Interpolation means inserting dynamic data (like variables or expressions) inside HTML in React using curly braces { }.
- It helps show JavaScript values directly inside JSX.
- Important Points:
a) Used to display variables, functions, or expressions inside JSX.
- Always written inside { }.
- Works only in JSX (JavaScript XML).
- You can use math or string expressions too:
<p>{5 + 10}</p>  // Output: 15
- In short:
Interpolation: { } is used to insert JS values in JSX.
---------------------------------------------------------------------
12) Why There’s No Need to “Call” a Function in ReactJS JSX?
- In JSX, React automatically calls the function component to render the UI.
- When React runs the app, it calls App() internally, so you don’t write App() yourself.
- Important Points:
a) React automatically executes component functions.
b) You just use the component name (<App />) instead of calling it.
c) Keeps code clean and readable.
d) JSX treats <App /> as a custom HTML tag for that function.
- In short:
need to call function: React calls component functions automatically when rendering.
---------------------------------------------------------------------
*/ 