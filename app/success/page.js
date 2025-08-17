import Link from "next/link";

export default function SuccessPage(){
    return (
        <div className="page-container">
            <h2>Thank you for your purchase!! :)</h2>
            <Link href={'/'}>
            <div className="ty-btns">
            <button>Continue &rarr;</button>
            <button>Home</button></div>
            </Link>
        </div>
    )
}