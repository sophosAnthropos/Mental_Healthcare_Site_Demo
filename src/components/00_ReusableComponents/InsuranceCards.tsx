import React from 'react'

export const InsuranceCards = ({source, heights}: {source: string, heights: string}): JSX.Element => {
    return (
        <div
            className={`
                w-[80%] h-[100px] flex justify-center items-center

                sm:w-[90%] sm:h-[150px]
            `}
        >
            <img 
                src={source} 
                alt="" 
                className={`
                    ${heights}
                `}
            />
        </div>
    )
}