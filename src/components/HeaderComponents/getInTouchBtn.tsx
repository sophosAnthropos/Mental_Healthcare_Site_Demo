import React from 'react'

export const GetInTouchBtn = () => {
  return (
    <div
        className={`
            w-1/6 flex items-center
        `}
    >
        <button
            className={`
                w-2/3 h-2/3 bg-blue-400 rounded-2xl shadow-md text-blue-50 font-bold text-lg
            `}
        >
            Get in touch
        </button>
    </div>
  )
}

