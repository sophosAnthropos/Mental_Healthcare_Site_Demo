export const AddressAndPhone = () => {

    return (
        <section
                className={`
                    w-[98%] h-1/3 text-purple-900 font-bold tracking-widest text-sm mt-1 flex flex-col justify-evenly border-l-4 border-t-4 rounded-tl-xl border-purple-800 fa-solid

                    sm:w-1/4 sm:h-[85%] sm:text-lg sm:mt-0 
                `}
            >
                <div
                    className={`
                        h-1/2
                        sm:h-1/3 flex justify-center
                    `}
                >
                    <div
                        className={`
                            w-[4%]

                            sm:w-[5%] sm:h-2/3 
                        `}
                    >
                        <img 
                            src="../../../src/assets/Images/mapMarker.png" 
                            alt="purple and blue map marker" 
                            className={`
                                
                            `}
                        />
                    </div>
                    <div
                        className={`
                            w-[85%] h-full
                            sm:w-[85%] sm:text-base
                        `}
                    >
                        <p
                            className={`
                                text-center
                            `}
                        >123 Healing Street, Suite 123</p>
                        <p
                            className={`
                                w-[65%] h-[50%] flex justify-center items-end
                            `}
                        >City, State 12345</p>
                    </div>
                </div>
                <p
                    className={`
                        w-[55%] 
                        sm:w-[60%] h-1/5  text-center
                    `}
                >
                    <span className={`fa-solid fa-phone pr-4`}></span>
                    (123) 456-7890
                </p>
            </section>
    )
}