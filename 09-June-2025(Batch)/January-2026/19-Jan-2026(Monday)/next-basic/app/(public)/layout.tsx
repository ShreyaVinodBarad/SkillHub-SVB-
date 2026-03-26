import Navbar from "../components/Navbar";

const layout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    /*
    👆
    - You are creating a function component
    - Name is layout
    a) ({ children, }: ...)
    - This means:
    You are receiving props
    children = content inside this layout
    - Simple meaning:
    Whatever page you open will come inside children
    b) Readonly<{ children: React.ReactNode; }>
    - This is TypeScript typing
    children → must be valid React content
    React.ReactNode → anything like: text, HTML, components
    Readonly means → You cannot change the props 
    */
    return (
        <>
            <Navbar />
            {/* 
            👆
            - This is your Navbar component
            - It will show on every page using this layout
            */}
            {children}
            {/* 
            👆
            - Show the page content here
            - Example:
            If user opens /about {children} becomes:
            <h1>About Page</h1>
            */}
        </>
    )
}

export default layout
/*
1) This layout means:
Navbar (always visible)
↓
Page content (changes)

2) Example
- Think like:
Navbar = Header of website
{children} = Different pages (Home, About, Contact)
*/ 