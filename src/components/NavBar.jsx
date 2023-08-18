import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/About'>About</Link>
                <Link href='/projects'>projects</Link>
                <Link href='/articles'>articles</Link>
            </nav>
            <Logo/>
            <nav>
            
                <Link href='/' target={"_blank"}>Twitter</Link>
                <Link href='/' target={"_blank"}>Twitter</Link>
                <Link href='/' target={"_blank"}>Twitter</Link>
                <Link href='/' target={"_blank"}>Twitter</Link>
                <Link href='/' target={"_blank"}>Twitter</Link>
                
            </nav>
        </header>
    );
};

export default NavBar;
