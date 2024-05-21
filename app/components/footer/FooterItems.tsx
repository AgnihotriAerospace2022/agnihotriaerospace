import  "./footer.css"  ;
import Link from "next/link";
export default function Items()
{
    return (
        <ul className="hidden lg:inline-block lg:ml-6">
            <li>
            <Link href="/about" >About</Link>
            </li>
            <li >
            <Link href="/gallery" >Gallery</Link>
            </li>
            <li >
            <Link href="/contact">Contact </Link>
            </li>
            <li >
            <Link href="/launch">Launch</Link>
            </li>
            <li >
            <Link href="/product">Product </Link>
            </li>
            <li >
            <Link href="/work">Work With Us </Link>
            </li>
        </ul>
    );
}