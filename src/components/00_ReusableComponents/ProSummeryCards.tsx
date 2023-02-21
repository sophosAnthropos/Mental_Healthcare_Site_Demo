import React from 'react'

export const ProSummeryCards = ({source, heading, bgNum}: {source: string, heading: string, bgNum:number}): JSX.Element => {

    
  return (
    <div
        className={`
            w-full h-[50rem] 
        `}
    >
        <div
            className={`
                h-[40%]
            `}
        >
            <img 
                src={source} 
                alt="generic psych image" 
                className={`
                    w-full h-full
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
                    h-1/6 flex justify-center items-end text-2xl ${bgNum === 1 ? 'text-blue-200' : 'text-blue-600'}
                `}
            >{heading}</h2>
            <p
                className={`
                    h-2/3 px-8 text-lg text-justify ${bgNum === 1 ? 'text-violet-100' : 'text-violet-700'} tracking-wide leading-8 flex items-center
                `}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eum voluptatem placeat rerum animi quas neque minus velit vitae quia! Enim, perferendis! Nostrum corporis voluptate adipisci similique, fugiat consequatur maiores delectus doloribus placeat inventore et non, reiciendis provident. Ipsam, aspernatur.
            </p>
        </div>
    </div>
  )
}