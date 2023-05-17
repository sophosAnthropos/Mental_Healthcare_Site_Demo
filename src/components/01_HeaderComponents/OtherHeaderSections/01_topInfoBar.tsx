import { UpdateDailyHours } from "../../../Logic/UpdateDailyHours"

export const TopInfoBar = () => {
    return (

        <div
            className={`
                h-[6rem] bg-violet-900 bg-opacity-40 flex flex-col justify-between items-center

                sm:h-[2rem] sm:flex-row sm:justify-between
            `}
        >
            <div
                className={`
                    w-full h-2/3 flex flex-col justify-evenly items-center text-sm font-bold tracking-wide

                    sm:w-[65%] sm:h-full sm:flex-row
                `}
            >

                <div
                    className={`
                       w-full font-bold text-lime-100 text-center
                       
                       sm:w-1/3 
                    `}
                >
                    TODAYS HOURS: <UpdateDailyHours/>
                </div>

                <div
                    className={`
                       w-full text-violet-800 text-center

                       sm:w-1/2 sm:text-start
                    `}
                >
                   <span
                   className={`
                       fa-solid fa-phone text-lime-100
                   `} /> 123-456-7890
                </div>

            </div>


            <div
                className={`
                    w-full

                    sm:w-[35%] sm:h-full sm:flex sm:justify-end
                `}
            >

                <div
                    className={`
                        bg-white bg-opacity-60 flex items-center emergencyText
                        
                        sm:w-full sm:h-full sm:justify-center sm:items-start
                    `}
                >

                    <a href='https://988lifeline.org/chat/'
                        className={`
                           w-3/4 text-end text-red-500 text-lg font-bold pr-2

                            sm:w-[55%] sm:h-full sm:text-center sm:pr-0 sm:SPH_Text
                        `}>
                        Suicide Prevention Hotline:
                    </a>
                    <p
                        className={`
                           w-1/5 font-bold tracking-widest text-violet-900 font-sans
                           sm:w-[25%] sm:h-full sm:SPH_Text sm:flex sm:items-start
                        `}>
                        988
                    </p>

                </div>

            </div>

        </div>
    )
}