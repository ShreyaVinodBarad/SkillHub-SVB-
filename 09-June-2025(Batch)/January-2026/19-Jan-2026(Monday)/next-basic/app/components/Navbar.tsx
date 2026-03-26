import Link from "next/link"

const Navbar = () => {
    return (
        <div className="bg-pink-400 p-4 flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/details/:id">Details</Link>
            <Link href="/register">Register</Link>
        </div>
    )
}

export default Navbar