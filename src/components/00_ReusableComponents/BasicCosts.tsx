import React from 'react'

export const BasicCosts = () => {
    return (
        <section
            className={`
                w-full h-[15rem] flex flex-col justify-evenly items-end ezRead text-md text-blue-400 pl-3 pt-3

                sm:w-1/4 sm:h-3/4 sm:text-2xl sm:pl-0 sm:pt-0
            `}
        >
            <p
                className={`
                    w-full flex items-end
                `}
            >
                <span
                    className={`
                        font-bold tracking-wide text-purple-500 italic text-[1rem] pr-3
                    
                        sm:text-[2rem]
                    `}
                >Session Fee: </span> $90 per session
            </p>
            <p
                className={`
                    w-full flex items-center
                `}
            >
                <span
                    className={`
                        font-bold tracking-wide text-purple-500 italic text-[1rem] pr-3
                    
                        sm:text-[2rem]
                    `}
                >Sliding Scale: </span> Yes
            </p>
            <div
                className={`
                    w-full h-[130px]
                `}
            >
                <p
                    className={`
                        h-1/3 font-bold tracking-wide text-purple-500 italic text-[1rem]
                    
                        sm:text-[2rem]
                    `}
                >
                    Pay By:
                </p>
                <ul
                    className={`
                        w-3/4 h-2/3 grid grid-cols-2 pl-7 list-disc 
                    `}
                >
                    <li>Cash</li>
                    <li>Check</li>
                    <li>Visa</li>
                    <li>Mastercard</li>
                </ul>
            </div>
        </section>
    )
}
