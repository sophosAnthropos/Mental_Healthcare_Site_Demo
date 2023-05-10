import React from 'react'
import { StaffReferences } from './ReferenceObject'

export const StaffCards = ({num}: {num: number}): JSX.Element => {


  return (
    <div
        className={`
            w-[90%] h-[48%] flex items-center justify-around border-[1px] ${num%2 != 0? 'bg-violet-400 border-violet-700 shadow-violet-900' : 'bg-blue-400 border-blue-700 shadow-blue-900'}  rounded-xl shadow-md 
        `}
    >
        {
            num === 1 ? 
                <>
                    <aside
                        className={`
                            w-1/4 h-full flex flex-col items-center justify-center
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
            :
                <>
                    {StaffReferences[num]}
                    <aside
                        className={`
                            w-1/4 h-full flex flex-col items-center justify-center
                        `}
                    >
                        <img src="../../../src/assets/Images/ImgPlaceholderLookLeft.png" alt="green gumdrop with black eyes" />
                        <h2
                            className={`
                                text-2xl font-bold text-lime-300 easyRead
                            `}
                        >PLACEHOLDER IMAGE</h2>
                    </aside>

                </>
        }
    </div>
  )
}

