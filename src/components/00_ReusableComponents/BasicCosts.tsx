import React from 'react'

export const BasicCosts = () => {
    return (
        <section
            className={`
                w-1/4 h-3/4 flex flex-col justify-evenly items-end ezRead text-2xl text-blue-400
            `}
        >
            <p
                className={`
                    w-full flex items-end
                `}
            >
                <span
                    className={`
                        font-bold tracking-wide text-purple-500 italic text-[2rem] pr-3
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
                        font-bold tracking-wide text-purple-500 italic text-[2rem] pr-3
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
                        h-1/3 font-bold tracking-wide text-purple-500 italic text-[2rem]
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
