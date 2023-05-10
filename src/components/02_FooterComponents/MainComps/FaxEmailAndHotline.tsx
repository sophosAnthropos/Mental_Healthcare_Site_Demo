export const FaxEmailAndHotline = () => {

    return (
        <section
                className={`
                    w-[98%] h-1/3 text-purple-900 text-sm font-bold flex flex-col justify-evenly items-center

                    sm:w-1/3 sm:h-[80%] sm:text-lg sm:border-none
                `}
            >
                <p
                    className={`
                        w-[85%] h-1/3
                        sm:w-[80%] sm:h-1/5
                    `}
                >
                    <span className={`fa-solid fa-fax pr-4`}>
                        <span className={`pl-3`}>
                            (123) 000-0000
                        </span>
                    </span>
                    
                </p>
                <p
                    className={`
                        w-[85%] h-1/3
                        sm:w-[80%] sm:h-1/5
                    `}
                >
                    <span className={`fa-solid fa-envelope pr-4`}>
                        <span className={`pl-3 tracking-widest`}>
                            JDoe@JessieDoeTherarpy.com
                        </span>
                    </span>
                    
                </p>
                <p
                    className={`
                        w-[95%] h-1/3 emergencyText text-red-600 flex justify-evenly items-center text-center text-base
                          
                        sm:w-[90%] sm:h-1/5 sm:text-2xl sm:justify-start
                    `}
                >
                    <span
                        className={`
                            sm:w-[67%]
                        `}
                    >
                        SUICIDE PREVENTION HOTLINE:
                    </span>
                    <span
                        className={`
                            text-purple-900 font-sans font-semibold
                            sm:w-[20%] sm:text-start
                        `}
                    >
                        988
                    </span>
                    
                </p>
            </section>
    )
}