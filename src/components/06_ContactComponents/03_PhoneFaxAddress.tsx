export const PhoneFaxAddress = (): JSX.Element => {

    return (
        <div
            className={`
                w-full h-1/4 ezRead font-bold grid grid-cols-2 place-items-center justify-items-end text-lg
                
                sm:flex sm:flex-col sm:justify-evenly
                sm:w-[90%] sm:h-[40%] sm:contactInfoMainText
            `}
        >
            
            
            <div
                className={`
                    w-full h-[90%] flex justify-center items-center text-purple-500 border-r-2 border-purple-300
                    sm:w-full sm:h-1/4 sm:justify-start sm:border-none
                `}
            >
                <h2
                    className={`
                        fa-solid fa-phone text-lime-500 tracking-wider mr-2
                        sm:contactInfoAltText sm:mr-3
                    `}
                />
                <p>(123) 456-7890</p>
            </div>



            <div
                className={`
                    w-full h-[90%] flex justify-center items-center
                    sm:w-full sm:h-1/4 sm:justify-start sm:items-center text-purple-500
                `}
            >
                <h2
                    className={`
                        fa-solid fa-fax text-lime-500 tracking-wider mr-2
                        sm:contactInfoAltText sm:mr-3
                    `}
                />
                <p>(123) 000-0000</p>
            </div>



            <div
                className={`
                    w-[95%] h-[80%] col-span-2 flex justify-start items-end text-purple-500
                    sm:w-full sm:h-1/3 sm:items-center
                `}
            >
                <h2
                    className={`
                        fa-solid fa-building w-[10%] h-full flex justify-center items-center text-lime-500 tracking-wider
                        sm:w-[7%] sm:contactInfoAltText sm:justify-start
                    `}
                />


                <div
                    className={`
                        w-[90%] h-full flex flex-col items-start justify-end
                        sm:w-[93%] sm:h-full sm:justify-end sm:leading-10 
                    `}
                >
                    <p
                        className={`
                            w-full h-[35%]
                        `}
                    >123 Healing Street, Suite 123</p>
                    <p
                        className={`
                            w-full h-[35%]
                        `}
                    >City, State 12345</p>
                </div>
            </div>


        </div>
    )
}