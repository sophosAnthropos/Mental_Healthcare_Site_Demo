import React from 'react'

export const ProSummeryCards = ({source, heading, bgNum, imgStyles, children}: {source: string, heading: string, bgNum: number, imgStyles: string, children:JSX.Element}): JSX.Element => {

    
  return (
    <div
        className={`
            w-full h-[40rem]
            sm:h-[50rem] 
        `}
    >
        <div
            className={`
                h-[40%] bg-blue-900 flex items-center justify-center
            `}
        >
            <img 
                src={source} 
                alt="generic psych image" 
                className={`
                    ${imgStyles}
                `}
            />
        </div>
        <div
            className={`
                h-[60%] ${bgNum === 1 ? 'bg-violet-600' : 'bg-violet-300'}
            `}
        >
            <h2
                className={`
                    h-1/4 flex justify-center items-center text-xl ${bgNum === 1 ? 'text-blue-200' : 'text-blue-600'}

                    sm:items-end sm:text-2xl
                    
                `}
            >
                {heading}
            </h2>
            {children}
        </div>
    </div>
  )
}