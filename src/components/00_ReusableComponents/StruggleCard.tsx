import React from 'react'

export const StruggleCard = ({struggle, category}: {struggle: string, category: string}) => {

    let cat;

    const cardStyle = () : string => {

        if (category === 'mental') {
            cat = 'bg-gradient-to-br  from-blue-200 to-purple-100'
        } 
        else if (category === 'personal') {
            cat = 'bg-gradient-to-br  from-purple-200 to-lime-100'
        }
        else {
            cat = 'bg-gradient-to-br  from-lime-200 to-blue-100'
        };

        return cat
    }

    cardStyle()

  return (
    <div
        className={`
            ${cat} w-full h-[55px] 

            sm:w-[400px] sm:h-[75px] sm:rounded-[50px] sm:rounded-bl-[0px] sm:shadow-md sm:shadow-neutral-500 sm:hover:scale-[105%] sm:hover:shadow-neutral-400
        `}
    >
        <p
            className={`
                h-full flex justify-center items-center text-sm ezRead text-purple-700 text-center
                
                sm:text-lg
            `}
        >
            {struggle}
        </p>
    </div>
  )
}