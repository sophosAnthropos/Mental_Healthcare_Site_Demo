export const SubMenu = ({children}: {children: JSX.Element}): JSX.Element => {
    return (
        <>
            <div
                className={`
                   w-full h-full flex flex-col items-center
                `}
            >
                {children}
            </div>
        </>
    )
}