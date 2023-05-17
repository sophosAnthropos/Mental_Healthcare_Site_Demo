import React from 'react'
import { StaffReferences } from './ReferenceObject'

export const StaffCards = ({num}: {num: number}): JSX.Element => {


  return (
    <div
        className={`
            w-[95%] h-[1000px] flex flex-col items-center justify-around border-[1px] ${num%2 != 0? 'bg-violet-400 border-violet-700 shadow-violet-900' : 'bg-blue-400 border-blue-700 shadow-blue-900'}  rounded-xl shadow-md 

            sm:flex-row sm:w-[90%] sm:h-[48%]
        `}
    >
        {
            num === 1 ? 
                <>
                    <aside
                        className={`
                            flex w-1/2 flex-col items-center justify-center

                            sm:w-1/4 sm:h-full
                        `}
                    >
                        <img src="../../../src/assets/Images/ImgPlaceholder.png" alt="green gumdrop with black eyes" />
                        <h2
                            className={`
                                sm:text-2xl font-bold text-lime-300 easyRead
                            `}
                        >PLACEHOLDER IMAGE</h2>
                    </aside>
                    {StaffReferences[num]}
                </> 
            :
                <>
                    
                    <aside
                        className={`
                            flex w-1/2 flex-col items-center justify-center

                            sm:w-1/4 sm:h-full
                        `}
                    >
                        <img src="../../../src/assets/Images/ImgPlaceholder.png" alt="green gumdrop with black eyes" />
                        <h2
                            className={`
                                text-2xl font-bold text-lime-300 easyRead
                            `}
                        >PLACEHOLDER IMAGE</h2>
                    </aside>
                    {StaffReferences[num]}

                </>
        }
    </div>
  )
}

