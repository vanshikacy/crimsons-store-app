import Link from "next/link";

export default function NotFound(){
    return (
        <div className="page-container">
            <h2>Page not found :(</h2>
            <p>404</p>
            <Link href={'/'}>
            <button>Home</button>
            </Link>
        </div>
    )
}