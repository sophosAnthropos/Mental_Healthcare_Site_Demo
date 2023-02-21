export const AddressAndPhone = () => {

    return (
        <section
                className={`
                    w-1/4 h-[85%] flex flex-col justify-evenly border-l-4 border-t-4 rounded-tl-xl border-purple-800  fa-solid
                `}
            >
                <div
                    className={`
                        h-1/3 flex justify-center
                    `}
                >
                    <div
                        className={`
                            w-[5%] h-2/3
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
                            w-[85%] h-full font-bold text-purple-900 text-xl tracking-wider pl-[1px]
                        `}
                    >
                        <p
                            className={`
                                text-center
                            `}
                        >800 Legion Street, Suite 100E</p>
                        <p
                            className={`
                                w-[65%] h-[50%] flex justify-center items-end
                            `}
                        >Conway, SC 29526</p>
                    </div>
                </div>
                <p
                    className={`
                        w-[60%] h-1/5 text-purple-900 text-xl font-bold text-center tracking-wider
                    `}
                >
                    <span className={`fa-solid fa-phone pr-4`}></span>
                    (843) 279-0092
                </p>
            </section>
    )
}