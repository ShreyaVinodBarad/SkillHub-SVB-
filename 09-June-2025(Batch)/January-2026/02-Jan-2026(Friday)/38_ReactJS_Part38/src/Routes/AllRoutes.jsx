import { lazy } from "react"

// Lazy Loading 👇
const Home = lazy(() => import("./../pages/Home"))
const About = lazy(() => import("./../pages/About"))
const Contact = lazy(() => import("./../pages/Contact"))
const Demo = lazy(() => import("./../pages/Demo"))
const Test = lazy(() => import("./../pages/Test"))

export const publicRoutes = [
    { label: "Home", path: "/", element: <Home /> },
    { label: "About", path: "/about", element: <About /> },
    { label: "Contact", path: "/contact", element: <Contact /> },
    { label: "Demo", path: "/demo", element: <Demo /> },
    { label: "Test", path: "/test", element: <Test /> }
]