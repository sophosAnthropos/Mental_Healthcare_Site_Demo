export const FaxEmailAndHotline = () => {

    return (
        <section
                className={`
                    w-[98%] h-1/3 text-purple-900 text-sm font-bold flex flex-col justify-evenly items-center

                    sm:w-1/3 sm:h-[80%] sm:text-xl sm:border-none
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
                            (843) 000-0000
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
                            cstewart@talktocaren.com
                        </span>
                    </span>
                    
                </p>
                <p
                    className={`
                        w-[95%] h-1/3 emergencyText text-red-600 flex justify-evenly items-center text-center text-base
                          
                        sm:w-[90%] sm:h-1/5 sm:text-2xl
                    `}
                >
                    <span
                        className={`
                            sm:w-[80%]
                        `}
                    >
                        SUICIDE PREVENTION HOTLINE:
                    </span>
                    <span
                        className={`
                            text-purple-900
                            sm:w-[20%]
                        `}
                    >
                        988
                    </span>
                    
                </p>
            </section>
    )
}