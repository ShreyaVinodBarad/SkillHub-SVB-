import React from 'react'
import TaskManager from './components/TaskManager'

const App = () => {
  return (
    <div>
      <TaskManager />
    </div>
  )
}

export default App
/*
1) How to use Bootstrap in ReactJS
- Go to the official Bootstrap website.
- Copy the CDN link (both the <link> and <script> tags).
- Open your React project and go to the public/index.html file.
- Paste the Bootstrap <link> tag below the <title> tag.
- Paste the Bootstrap <script> tag above the existing script tag
(usually before </body>).
- Now you can use Bootstrap classes and components directly in your
React code.
--------------------------------------------------------
*/ 