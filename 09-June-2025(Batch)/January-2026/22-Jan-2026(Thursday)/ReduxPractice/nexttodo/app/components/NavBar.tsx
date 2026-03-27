import Link from "next/link"

const NavBar = () => {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/todos">ToDos</Link>
        </div>
    )
}

export default NavBar