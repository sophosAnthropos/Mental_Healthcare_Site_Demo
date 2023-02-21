import { SubMenu } from "./NavItemSubMenu"

export const NavItem = ({menuItem}: {menuItem: JSX.Element}): JSX.Element => {

    return (
        <li
            className={`
                w-full h-[90%] group/openSub hover:rounded-lg hover:bg-gradient-to-br hover:from-fuchsia-700 hover:to-blue-400
            `}
        >
            <SubMenu>
                <a href="#"
                    className={`
                        w-full h-full cuteScript tracking-wide text-2xl text-violet-800 flex flex-col items-center justify-center group-hover/openSub:text-violet-50
                    `}
                >
                    {menuItem}
                </a>
            </SubMenu>
        </li>
    )
}