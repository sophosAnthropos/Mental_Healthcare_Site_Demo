import { SubMenu } from "./NavItemSubMenu"
import { Link } from "react-router-dom"

export const NavItem = ({children, open, close}: {children: JSX.Element, open: boolean, close: React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element => {

    return (
        <li
            className={`
                w-full h-1/5 group/openSub hover:rounded-lg hover:bg-gradient-to-br hover:from-fuchsia-700 hover:to-blue-400

                sm:h-[90%]
            `}
            onClick={() => {if (open) return close(!open)}}
        >
            <SubMenu>
                {children}
            </SubMenu>
        </li>
    )
}