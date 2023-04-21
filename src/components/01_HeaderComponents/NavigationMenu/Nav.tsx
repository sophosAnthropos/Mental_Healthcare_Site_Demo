import React from "react"
import { NavItem } from "./NavItem"
import { Link } from "react-router-dom"



export const NavMenu = ({open}: {open: boolean}): JSX.Element => {

    return (
        <nav
            className={`
                fixed top-0 z-[399] backdrop-blur-xl w-full h-full ${open ? "block" : "hidden"}

                sm:w-1/2 sm:h-full sm:relative sm:block
            `}
        >
            <ul
                className={`
                   h-full flex ${open ? "flex-col justify-center" : "flex-none"} relative
                   
                   sm:flex-row sm:justify-around sm:items-center 
                `}
            >
                
                <NavItem>
                    <Link to="/therapies"
                        className={`
                            w-full h-full cuteScript tracking-widest text-2xl text-violet-800 flex flex-col items-center justify-center group-hover/openSub:text-violet-50
                        `}
                    >
                        <p>THERAPIES</p>
                    </Link>
                </NavItem>
            
            
                <NavItem>
                    <Link to="/about"
                        className={`
                            w-full h-full cuteScript tracking-widest text-2xl text-violet-800 flex flex-col items-center justify-center group-hover/openSub:text-violet-50
                        `}
                    >
                        <p>ABOUT</p>
                    </Link>
                </NavItem>
            
            
                <NavItem>
                    <Link to="/between_session"
                        className={`
                            w-full h-full cuteScript tracking-widest text-2xl text-violet-800 flex flex-col items-center justify-center group-hover/openSub:text-violet-50
                        `}
                    >
                        <p>BETWEEN</p>
                        <p>SESSIONS</p>
                    </Link>
                </NavItem>            
            
                <NavItem>
                    <Link to="/contact"
                        className={`
                            w-full h-full cuteScript tracking-widest text-2xl text-violet-800 flex flex-col items-center justify-center group-hover/openSub:text-violet-50
                        `}
                    >
                        <p>CONTACT</p>
                    </Link>
                </NavItem>                
            </ul>
        </nav>
    )
}