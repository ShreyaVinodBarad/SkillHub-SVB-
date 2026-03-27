import NavBar from "../components/NavBar";
// 👆 Importing the NavBar component

const layout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    /*
    👆
    - Creating a layout component
    children = all pages/content inside this layout
    Readonly = props cannot be changed (safe)
    React.ReactNode = any valid React content
    */
    return (
        <>
            <NavBar />
            {/* 👆 Shows navbar on every page */}
            {children}
            {/* 👆 Renders page content below navbar */}
        </>
    )
}

export default layout