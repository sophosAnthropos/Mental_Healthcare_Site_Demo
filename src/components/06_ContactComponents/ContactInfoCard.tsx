import React from 'react'

export const ContactInfoCard = () => {
  return (
        <section
            className={`
                h-1/2 bg-gradient-to-bl from-purple-100 to-purple-400
                sm:w-1/2 sm:h-full sm:flex sm:justify-center sm:items-center 
            `}
        >
            <div
                className={`
                    h-full flex flex-col justify-end border-y-4 border-blue-300 bg-white bg-opacity-60 backdrop-blur-lg shadow-lg
                    
                    sm:w-[85%] sm:h-[95%] sm:rounded-3xl sm:items-end sm:justify-evenly sm:border-4 sm:border-blue-200
                `}
            >
                <div
                    className={`
                        w-full h-1/4 ezRead font-bold grid grid-cols-2 place-items-center justify-items-end text-lg
                        
                        sm:flex sm:flex-col sm:justify-evenly
                        sm:w-[90%] sm:h-[40%] sm:text-3xl
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
                                sm:text-2xl sm:mr-3
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
                                sm:text-2xl sm:mr-3
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
                                sm:w-[7%] sm:text-2xl sm:justify-start
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
                                     
                                     sm:w-5/6 sm:text-3xl
                                `}
                            >
                                Hours
                            </h2>
                        </header>
                        <div
                            className={`
                                h-4/5 flex flex-col justify-around items-end text-blue-500 font-bold  ezRead tracking-wider
                                sm:text-2xl
                            `}
                        >
                            <p
                                className={`
                                    w-5/6 h-1/6
                                `}
                            >
                                Monday: <span className={`pl-3 text-purple-500 font-normal`}>8 a.m. - 4 p.m.</span>
                            </p>
                            <p
                                className={`
                                    w-5/6 h-1/6
                                `}
                            >
                                Tuesday: <span className={`pl-3 text-purple-500 font-normal`}>8 a.m. - 4 p.m.</span>
                            </p>
                            <p
                                className={`
                                    w-5/6 h-1/6
                                `}
                            >
                                Wednesday: <span className={`pl-3 text-purple-500 font-normal`}>8 a.m. - 4 p.m.</span>
                            </p>
                            <p
                                className={`
                                    w-5/6 h-1/6
                                `}
                            >
                                Thursday: <span className={`pl-3 text-purple-500 font-normal`}>8 a.m. - 4 p.m.</span>
                            </p>
                            <p
                                className={`
                                    w-5/6 h-1/6
                                `}
                            >
                                Friday: <span className={`pl-3 text-purple-500 font-normal`}>8 a.m. - 4 p.m.</span>
                            </p>
                            <p
                                className={`
                                    w-5/6 h-1/6
                                `}
                            >
                                Saturday - Sunday: <span className={`pl-3 text-purple-500 font-normal`}>CLOSED</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
                

        </section>
  )
}

