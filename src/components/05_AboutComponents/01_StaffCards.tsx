import React from 'react'
import { StaffReferences } from './02_ReferenceObject'
import PersonOneImage from '../../assets/Images/02_AboutPageImages/personOne.png'
import PersonTwoImage from '../../assets/Images/02_AboutPageImages/personTwo.png'

export const StaffCards = ({num}: {num: number}): JSX.Element => {


  return (
    <div
        className={`
            w-[95%] h-[1200px] flex flex-col items-center justify-around border-[1px] ${num%2 != 0? 'bg-violet-400 border-violet-700 shadow-violet-900' : 'bg-blue-400 border-blue-700 shadow-blue-900'}  rounded-xl shadow-md 

            sm:flex-row sm:w-[90%] sm:h-[48%]
        `}
    >
        {
            num === 1 ? 
                <>
                    <aside
                        className={`
                            flex w-[30%] h-[25%] flex-col items-center justify-center

                            sm:aboutCardPersonOneImage sm:h-full
                        `}
                    >
                        <img src={PersonOneImage} alt="green gumdrop with black eyes" />
                    </aside>
                    {StaffReferences[num]}
                </> 
            :
                <>
                    
                    <aside
                        className={`
                            flex w-1/2 h-[25%] flex-col items-center justify-start

                            sm:aboutCardPersonTwoImage sm:h-full sm:justify-center
                        `}
                    >
                        <img src={PersonTwoImage} alt="green gumdrop with black eyes" />
                    </aside>
                    {StaffReferences[num]}

                </>
        }
    </div>
  )
}

