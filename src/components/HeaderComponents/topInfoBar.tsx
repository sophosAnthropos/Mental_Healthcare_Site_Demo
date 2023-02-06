export const TopInfoBar = () => {
    return (

        <div
            className={`
                h-[2rem] bg-blue-300 bg-opacity-40 flex justify-between items-center text-violet-800
            `}
        >
            <div
                className={`
                   w-[35%] flex justify-evenly items-center
                `}
            >

                <div
                    className={`
                       w-1/2 font-bold 
                    `}
                >
                    hours for that day
                </div>

                <div
                    className={`
                       w-1/3
                    `}
                >
                   <span
                   className={`
                       font-bold
                   `}>
                        phone:
                   </span> 000-000-0000
                </div>

            </div>


            <div
                className={`
                    w-[35%] h-full flex justify-end
                `}
            >

                <div
                    className={`
                        bg-indigo-100 bg-opacity-60 w-[70%] h-full flex justify-evenly items-start p-1
                    `}
                >

                    <a href='#'
                        className={`
                           w-1/2 text-center text-red-500 font-bold
                        `}>
                        Suicide Prevention Hotline:
                    </a>
                    <p
                        className={`
                           w-1/3
                        `}>
                        000 - 000 - 0000
                    </p>

                </div>

            </div>

        </div>
    )
}