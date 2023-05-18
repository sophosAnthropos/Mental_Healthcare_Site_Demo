export const AddressAndPhone = () => {

    return (
        <section
                className={`
                    w-[98%] h-1/3 text-purple-900 font-bold tracking-widest text-sm mt-1 flex flex-col justify-evenly border-l-4 border-t-4 rounded-tl-xl border-purple-800 fa-solid

                    sm:footerAddressAndPhone sm:h-[85%] sm:text-lg sm:mt-0 
                `}
            >
                <div
                    className={`
                        h-1/2 flex justify-center
                        sm:h-1/3 sm:justify-start
                    `}
                >
                    <div
                        className={`
                            w-[10%] h-full flex justify-center items-center
                            sm:w-[15%]

                        `}
                    >
                        <img 
                            src="../../../src/assets/Images/mapMarker.png" 
                            alt="purple and blue map marker" 
                            className={`
                                w-1/3
                                sm:w-[27%]
                            `}
                        />
                    </div>
                    <div
                        className={`
                            w-[90%] h-full flex flex-col justify-end
                            sm:w-[85%] sm:text-base
                        `}
                    >
                        <p
                            className={`
                                h-[37%] flex items-end
                                sm:h-[35%]
                            `}
                        >123 Healing Street, Suite 123</p>
                        <p
                            className={`
                                w-full h-[37%] flex justify-start items-center
                                sm:h-[35%]
                            `}
                        >City, State 12345</p>
                    </div>
                </div>
                <div
                    className={`
                        w-full h-1/2 flex
                        sm:h-1/4  
                    `}
                >
                    <p 
                        className={`
                            fa-solid fa-phone w-[10%] flex justify-center items-center
                            sm:w-[15%] sm:h-full
                        `}
                    ></p>
                    <p
                        className={`
                            w-[90%] flex items-center
                            sm:w-[85%] sm:h-full
                        `}
                    >
                        (123) 456-7890
                    </p>
                </div>
            </section>
    )
}