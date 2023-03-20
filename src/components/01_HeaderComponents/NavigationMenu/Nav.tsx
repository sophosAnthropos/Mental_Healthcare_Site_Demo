import React from "react"
import { NavItem } from "./NavItem"
import { Link } from "react-router-dom"



export const NavMenu = (): JSX.Element => {

    return (
        <nav
            className={`
                w-1/2 h-full relative
            `}
        >
            <ul
                className={`
                   h-full flex justify-around items-center relative
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