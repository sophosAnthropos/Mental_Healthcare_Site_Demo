import React from 'react'

export const ContactInfoCard = () => {
  return (
        <section
            className={`
                w-1/2 h-full flex justify-center items-center bg-gradient-to-bl from-purple-50 to-purple-300
            `}
        >
            <div
                className={`
                    w-5/6 h-[95%] flex flex-col justify-center items-end border-4 border-blue-200 rounded-3xl bg-white bg-opacity-60 backdrop-blur-lg shadow-lg
                `}
            >
                <div
                    className={`
                        w-[90%] h-[35%] text-3xl ezRead font-bold
                    `}
                >
                    <div
                        className={`
                            w-full h-1/4  flex justify-start items-center text-purple-400
                        `}
                    >
                        <h2
                            className={`
                                fa-solid fa-phone text-2xl text-lime-400 mr-3 tracking-wider
                            `}
                        />
                        <p>(843) 279-0092</p>
                    </div>
                    <div
                        className={`
                            w-full h-1/4  flex justify-start items-end text-purple-400
                        `}
                    >
                        <h2
                            className={`
                                fa-solid fa-fax text-2xl text-lime-400 mr-3 tracking-wider
                            `}
                        />
                        <p>(843) 000-0000</p>
                    </div>
                    <div
                        className={`
                            w-full h-1/2 flex justify-start items-center text-purple-400
                        `}
                    >
                        <h2
                            className={`
                                fa-solid fa-building text-2xl text-lime-400 mr-3 tracking-wider
                            `}
                        />
                        <div
                            className={`
                                w-[90%] h-4/5 flex flex-col justify-end leading-10
                            `}
                        >
                            <p>800 Legion Street</p>
                            <p>Conway, South Carolina 29526</p>
                        </div>
                    </div>
                </div>
                <div
                    className={`
                        w-full h-1/2 flex items-center
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
                                     w-5/6 flex justify-start items-center text-3xl ezRead font-bold tracking-wider pl-3 underline text-lime-400
                                `}
                            >
                                Hours
                            </h2>
                        </header>
                        <div
                            className={`
                                h-4/5 flex flex-col justify-around items-end text-blue-400 font-bold
                            `}
                        >
                            <p
                                className={`
                                    w-5/6 h-1/6 text-2xl ezRead tracking-wider
                                `}
                            >
                                Monday: <span className={`pl-3 text-purple-400 font-normal`}>8 a.m. - 4 p.m.</span>
                            </p>
                            <p
                                className={`
                                    w-5/6 h-1/6 text-2xl ezRead tracking-wider
                                `}
                            >
                                Tuesday: <span className={`pl-3 text-purple-400 font-normal`}>8 a.m. - 4 p.m.</span>
                            </p>
                            <p
                                className={`
                                    w-5/6 h-1/6 text-2xl ezRead tracking-wider
                                `}
                            >
                                Wednesday: <span className={`pl-3 text-purple-400 font-normal`}>8 a.m. - 4 p.m.</span>
                            </p>
                            <p
                                className={`
                                    w-5/6 h-1/6 text-2xl ezRead tracking-wider
                                `}
                            >
                                Thursday: <span className={`pl-3 text-purple-400 font-normal`}>8 a.m. - 4 p.m.</span>
                            </p>
                            <p
                                className={`
                                    w-5/6 h-1/6 text-2xl ezRead tracking-wider
                                `}
                            >
                                Friday: <span className={`pl-3 text-purple-400 font-normal`}>8 a.m. - 4 p.m.</span>
                            </p>
                            <p
                                className={`
                                    w-5/6 h-1/6 text-2xl ezRead tracking-wider
                                `}
                            >
                                Saturday - Sunday: <span className={`pl-3 text-purple-400 font-normal`}>CLOSED</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
                

        </section>
  )
}

