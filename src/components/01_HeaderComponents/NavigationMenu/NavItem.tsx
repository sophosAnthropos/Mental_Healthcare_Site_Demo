import { SubMenu } from "./NavItemSubMenu"
import { Link } from "react-router-dom"

export const NavItem = ({children}: {children: JSX.Element}): JSX.Element => {

    return (
        <li
            className={`
                w-full h-[90%] group/openSub hover:rounded-lg hover:bg-gradient-to-br hover:from-fuchsia-700 hover:to-blue-400
            `}
        >
            <SubMenu>
                {children}
            </SubMenu>
        </li>
    )
}