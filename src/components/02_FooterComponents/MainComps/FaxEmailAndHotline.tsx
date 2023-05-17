export const FaxEmailAndHotline = () => {

    return (
        <section
                className={`
                    w-[98%] h-1/3 flex flex-col justify-evenly items-center
                    text-purple-900 text-sm font-bold fa-solid tracking-widest border-x-4 border-transparent

                    sm:w-1/3 sm:h-[80%] sm:text-lg sm:border-none
                `}
            >
                <div
                    className={`
                        w-full h-1/3 flex
                        sm:w-[90%]
                    `}
                >
                    <p 
                        className={`
                            fa-solid fa-fax w-[10%] h-full flex justify-center items-center
                            sm:w-[15%]
                        `}
                    ></p>
                    <p 
                        className={`
                            w-[90%] h-full flex items-center
                            sm:w-[85%]
                        `}
                    >
                        (123) 000-0000
                    </p>
                    
                </div>
                <div
                    className={`
                        w-full h-1/3 flex
                        sm:w-[90%]
                    `}
                >
                    <p 
                        className={`
                            fa-solid fa-envelope w-[10%] h-full flex justify-center items-center
                            sm:w-[15%]
                        `}
                    ></p>
                    <p 
                        className={`
                            w-[90%] h-full flex items-center
                            sm:w-[85%]
                        `}
                    >
                        JDoe@JessieDoeTherarpy.com
                    </p>
                    
                </div>
                <div
                    className={`
                        w-full h-1/3 emergencyText text-red-600 flex justify-evenly items-center text-center text-base
                          
                        sm:w-[90%] sm:text-2xl sm:justify-start
                    `}
                >
                    <p
                        className={`
                            w-4/5 h-full flex items-center justify-center
                            sm:w-[75%]
                        `}
                    >
                        SUICIDE PREVENTION HOTLINE:
                    </p>
                    <p
                        className={`
                            w-1/5 h-full flex items-center text-purple-900 font-sans font-semibold
                            sm:w-[12%] sm:justify-center
                        `}
                    >
                        988
                    </p>
                    
                </div>
            </section>
    )
}