export const HoursOfOperation = (): JSX.Element => {

    return (
        <div
            className={`
                w-full h-2/3 flex items-center
                sm:h-1/2
            `}
        >
            <div
                className={`
                    w-full h-[90%]
                `}
            >
                
                
                <header
                    className={`
                        h-[20%] flex justify-end 
                    `}
                >
                    <h2
                        className={`
                                w-full flex justify-start items-center text-2xl ezRead font-bold tracking-wider pl-3 underline text-lime-500
                                
                                sm:w-5/6 sm:contactInfoMainText
                        `}
                    >
                        Hours
                    </h2>
                </header>



                <div
                    className={`
                        h-4/5 flex flex-col justify-around items-end text-blue-500 font-bold  ezRead tracking-wider
                        sm:contactInfoAltText
                    `}
                >
                    <p className={` w-5/6 h-1/6 `} >

                        Monday: <span className={`contactPageHours`}> 8 a.m. - 4 p.m. </span>
                    
                    </p>
                    <p className={` w-5/6 h-1/6 `} >

                        Tuesday: <span className={`contactPageHours`}> 8 a.m. - 4 p.m. </span>
                    
                    </p>
                    <p className={` w-5/6 h-1/6 `} >

                        Wednesday: <span className={`contactPageHours`}> 8 a.m. - 4 p.m. </span>
                    
                    </p>
                    <p className={` w-5/6 h-1/6 `} >

                        Thursday: <span className={`contactPageHours`}> 8 a.m. - 4 p.m. </span>
                    
                    </p>
                    <p className={` w-5/6 h-1/6 `} >

                        Friday: <span className={`contactPageHours`}> 8 a.m. - 4 p.m. </span>
                    
                    </p>
                    <p className={` w-5/6 h-1/6 `} >

                        Saturday - Sunday: <span className={`contactPageHours`}> CLOSED </span>
                    
                    </p>
                </div>

            </div>
        </div>
    )
}