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
                
                <NavItem menuItem={<p>THERAPIES</p>}  />
            
            
                <NavItem menuItem={<p>ABOUT</p>} />
            
            
                <NavItem menuItem={
                    <>
                        <p>BETWEEN</p>
                        <p>SESSIONS</p>
                    </>
                } />
            
            
                <NavItem menuItem={<p>COVERAGE</p>}  />
            
            
                <NavItem menuItem={<p>CONTACT</p>}  />
            
            
                <NavItem menuItem={<p>MORE</p>} />
                
            </ul>
        </nav>
    )
}