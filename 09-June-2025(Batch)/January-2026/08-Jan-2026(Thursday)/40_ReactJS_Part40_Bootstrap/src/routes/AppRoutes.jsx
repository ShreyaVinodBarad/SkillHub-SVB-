import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicLayout from '../components/PublicLayout'

const Home = lazy(() => import("./../pages/Home"))
const Test = lazy(() => import("./../pages/Test"))
const RbButton = lazy(() => import("./../pages/RbButton"))
const RbAlert = lazy(() => import("./../pages/RbAlert"))
const RbCard = lazy(() => import("./../pages/RbCard"))
const RbListGroup = lazy(() => import("./../pages/RbListGroup"))
const RbModal = lazy(() => import("./../pages/RbModal"))
const RbOffcanvas = lazy(() => import("./../pages/RbOffcanvas"))

export const publicRoutes = [
    { label: "Home", path: "/", element: <Home /> },
    { label: "Test", path: "/test", element: <Test /> },
    { label: "Button", path: "/button", element: <RbButton /> },
    { label: "Alert", path: "/alert", element: <RbAlert /> },
    { label: "Card", path: "/card", element: <RbCard /> },
    { label: "ListGroup", path: "/list", element: <RbListGroup /> },
    { label: "Modal", path: "/modal", element: <RbModal /> },
    { label: "Offcanvas", path: "/offcanvas", element: <RbOffcanvas /> },
]

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PublicLayout />}>
                        {
                            publicRoutes.map(item => <Route
                                key={item.label}
                                path={item.path}
                                element={<Suspense fallback={<h1>Please Wait...</h1>}>{item.element}</Suspense>}
                            />)
                        }
                    </Route>
                    <Route path='*' element={<h1>Page Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes