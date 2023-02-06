import React from "react"
import { NavItem } from "./NavItem"


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
                
                <NavItem menuItem={<p>Therapies</p>}  />
            
            
                <NavItem menuItem={<p>About</p>} />
            
            
                <NavItem menuItem={
                    <>
                        <p>Between</p>
                        <p>Session</p>
                    </>
                } />
            
            
                <NavItem menuItem={<p>Coverage</p>}  />
            
            
                <NavItem menuItem={<p>Contact</p>}  />
            
            
                <NavItem menuItem={<p>More</p>} />
                
            </ul>
        </nav>
    )
}