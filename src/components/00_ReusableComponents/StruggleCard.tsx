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
            ${cat} w-[400px] h-[75px] rounded-[50px] rounded-bl-[0px] shadow-md shadow-neutral-500 hover:scale-[105%] hover:shadow-neutral-400
        `}
    >
        <p
            className={`
                h-full flex justify-center items-center text-xl ezRead text-purple-700
            `}
        >
            {struggle}
        </p>
    </div>
  )
}