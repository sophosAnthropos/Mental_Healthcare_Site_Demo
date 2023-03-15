import React from 'react'

export const InsuranceCards = ({source, heights}: {source: string, heights: string}): JSX.Element => {
    return (
        <div
            className={`
                w-[90%] h-[150px] flex justify-center items-center
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