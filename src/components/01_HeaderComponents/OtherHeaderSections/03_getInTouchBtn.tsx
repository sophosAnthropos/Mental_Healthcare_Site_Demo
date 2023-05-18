import React from 'react'

export const GetInTouchBtn = () => {
  return (
    <div
        className={`
            w-1/3 h-full flex items-center
        
            sm:headerTitleAndBtn border-blue-500
        `}
    >
        <button
            className={`
                            
                h-2/3 bg-blue-400 rounded-2xl shadow-md text-blue-50 font-bold easyRead px-2
                

                sm:w-2/3 sm:text-2xl
                sm:hover:bg-white sm:hover:text-[#7cd3ff] sm:hover:border-2 sm:hover:border-blue-200 sm:hover:BtnHoverShadow sm:hover:font-bold 
            `}
        >
            Get In Touch
        </button>
    </div>
  )
}

