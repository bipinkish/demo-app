import Link from "next/link";
import logoImg from "@/assets/logo.png"
import classes from "./Header.module.css"
import Image from "next/image";
import Background from "./Background";
import NavLink from "./NavLink";

export default function Header(){
    return <header className={classes.header}>
        <Background />
        <Link className={classes.logo} href={"/"}>
            <Image src={logoImg} alt="logo" priority/>
              NextLevel Food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink href={"/meals"}>Browse Meals</NavLink>
                </li>
                <li>
                    <NavLink href={"/community"}>Foodies Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}