import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
// 👆 Brings in tools for routing (page navigation). 
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import Gallery from './pages/Gallery'
import Account from './pages/Account'
import Protected from './components/Protected'
// 👆 Brings the page components.
const App = () => {
  return (
    <div>
      {/* 
      👇 
      a) What this code does?
      - This is a React app using React Router to move between pages — Home, About, and Contact — without reloading the page.
      */}
      <BrowserRouter>
        {/* 👆 Wraps the whole app and enables routing. */}

        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}
        {/* 👆 to and path should have same value. */}

        <NavBar />

        {/*
        👆 
        - This code is using React Router links for navigation.
        - <Link> is used instead of <a> so the page doesn’t reload.
        to shows where to go — the path of the page.
        - Example:
        <Link to="/">Home</Link> → goes to homepage.
        <Link to="/about">About</Link> → goes to about page.
        <Link to="/contact">Contact</Link> → goes to contact page.
        - The comment means the to value and the path (in <Route path="/..." />) must be same — so the link correctly opens that route. 
        */}

        <Routes>
          <Route element={<Home />} path='/' />
          {/* 👆 <Routes> and <Route> → Define different paths (URLs) and which component should show. */}
          <Route element={<About />} path='/about' />
          <Route element={<Contact />} path='/contact' />
          {/* <Route element={<Gallery />} path='/album' /> */}
          <Route element={<Protected><Gallery /></Protected>} path='/album' />
          {/* 👆 If isLogin is true than only Gallery Page will be shown or else the code that we wrote in Protected.jsx i.e.; Please Login will be shown.  */}
          <Route element={<Protected><Account /></Protected>} path='/account' />
          {/* 👆 You can change /about or /contact to any name (like /skillhub) and that will become the new path.  */}
          {/* 
          👆 
          Example:
          a) <Route path='/' element={<Home/>} />
          → When we visit /, the Home page appears.
          b) <Route path='/about' element={<About/>} />
          → When we visit /about, the About page shows.
          c) <Route path='/contact' element={<Contact/>} />
          → When we visit /contact, the Contact page shows.
          */}

          <Route path='*' element={<h1>No Page Found 404</h1>} />
          {/* 
          👆
          a) This line means 
          - If the user tries to open any page that doesn’t exist in your React app, then show the message “No Page Found 404”.
          b) In short:
          - It’s a default/fallback route for wrong or unknown URLs.
          */}

          {/* 
          📌 We can use the shortcut “srrouting” in SkillHub to get the syntax for navigation.
          Also, we can import BrowserRouter, Routes, and Route easily by placing the cursor on the words and pressing Ctrl + Space, then selecting the correct import option and pressing Enter.
          */}
        </Routes>
      </BrowserRouter>
      {/* 
      👆
      In short:
      - This code helps us move between pages (Home, About, Contact) in a React app using React Router, without refreshing the page.
      */}

    </div>
  )
}

export default App
/*
1) Multi Page Application
a) A website that has many pages, and each page reloads when you open it.
b) Example: Amazon, Flipkart (when you click a link, the whole page reloads).
c) Main Points:
- Each page has its own HTML file.
- When you click a link → server sends a new page.
- Slower because full page reloads.
- Good for large websites with lots of data.
- SEO friendly (search engines easily read all pages).
--------------------------------------------------------------------
2) Single Page Application
a) A website that has only one HTML page and loads data dynamically without reloading the full page.
b) Example: Gmail, Facebook, Instagram.
c) Main Points:
- Only one main HTML file.
- Uses JavaScript (like React, Angular, Vue) to change content.
- Faster and smoother user experience.
- Less data load after first time.
- Not as SEO friendly (harder for search engines to read).
--------------------------------------------------------------------
3) Simple Summary:
| Feature     | MPA                      | SPA                        |
| ----------- | ------------------------ | -------------------------- |
| Pages       | Many HTML pages          | One HTML page              |
| Page Reload | Every click reloads page | No reload, content updates |
| Speed       | Slower                   | Faster                     |
| Example     | Amazon                   | Gmail                      |
| SEO         | Better                   | Weaker                     |
--------------------------------------------------------------------
4) npm i react-router-dom
a) This command is used to install the React Router DOM package in your project.
- It helps in creating navigation and routing (moving between pages) in React apps.
b) To check if it’s installed:
- Go to your project folder.
- Open the package.json file.
- Under "dependencies", you’ll see:
"react-router-dom": "version number"
This means the package is downloaded successfully.
c) In short:
- npm i react-router-dom → installs routing package.
- Check package.json → dependencies → to confirm installation.
--------------------------------------------------------------------
5) Public Routes and Private Routes
a) Public Routes
- These pages can be visited by anyone.
- No login is required.
- Example: Home, About, Contact, Login, Register pages.
- Used to show general information or allow users to sign in.
b) Private Routes(Protected Routes)
- These pages are only for logged-in users.
- If the user is not logged in, they are redirected (usually to the Login page).
- Example: Dashboard, Profile, Settings pages.
- Used to protect user data or app features.
c) In short:
- Public = Open for all
- Protected = Only for logged-in users
--------------------------------------------------------------------
6) BrowserRouter, Routes, Route, and Link
a) BrowserRouter
- It wraps all your routes.
- It tells React to use routing system in the browser.
- Example:
<BrowserRouter>
  <App />
</BrowserRouter>
b) Routes
- It is like a container that holds all your routes.
- Inside it, you put all your <Route> components.
- Example:
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
c) Route
- It defines which component to show for a particular URL path.
- Example:
<Route path="/contact" element={<Contact />} />
- When user goes to /contact, it shows Contact component.
d) Link
- Used to move between pages without reloading the site.
- Works like <a> tag but faster in React.
- Example:
<Link to="/about">About</Link>
e) In short
| Term              | Purpose                      |
| ----------------- | ---------------------------- |
| BrowserRouter     | Enables routing in React app |
| Routes            | Holds all Route components   |
| Route             | Defines path and component   |
| Link              | Navigates between pages      |
--------------------------------------------------------------------
*/ 