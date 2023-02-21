import { UpdateDailyHours } from "../../../Logic/UpdateDailyHours"

export const TopInfoBar = () => {
    return (

        <div
            className={`
                h-[2rem] bg-blue-900 bg-opacity-40 flex justify-between items-center
            `}
        >
            <div
                className={`
                   w-[35%] flex justify-evenly items-center text-sm font-bold tracking-wide
                `}
            >

                <div
                    className={`
                       w-1/2 font-bold text-lime-100
                    `}
                >
                    TODAYS HOURS: <UpdateDailyHours/>
                </div>

                <div
                    className={`
                       w-1/3 text-violet-800
                    `}
                >
                   <span
                   className={`
                       fa-solid fa-phone text-lime-100
                   `} /> 843-279-0092
                </div>

            </div>


            <div
                className={`
                    w-[35%] h-full flex justify-end
                `}
            >

                <div
                    className={`
                        bg-white bg-opacity-60 w-[70%] h-full flex justify-evenly items-start p-1 emergencyText
                    `}
                >

                    <a href='https://988lifeline.org/chat/'
                        className={`
                           w-2/3 text-center text-red-500 font-bold text-xl
                        `}>
                        Suicide Prevention Hotline:
                    </a>
                    <p
                        className={`
                           w-1/3 font-bold tracking-widest text-lg text-violet-900
                        `}>
                        988
                    </p>

                </div>

            </div>

        </div>
    )
}