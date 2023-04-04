import React from 'react'
import { GetInTouchBtn } from './OtherHeaderSections/getInTouchBtn'
import { NavMenu } from './NavigationMenu/Nav'
import { TitleSection } from './OtherHeaderSections/titleSection'
import { TopInfoBar } from './OtherHeaderSections/topInfoBar'

export const SiteHeader = () => {
  return (
    <header
        className={`
            flex flex-col 
            sm:w-full sm:h-[10rem] sm:relative sm:z-40
        `}
    >
        <TopInfoBar/>
        <div
            className={`
                h-[6.2rem] flex items-center
                
                sm:h-[8rem] sm:flex sm:justify-between
            `}  
        >
            <TitleSection/>
            <button 
                className={`
                    w-[5rem] h-[5rem] fa-solid fa-bars fixed top-[-1.7rem] right-[-1.7rem] bg-lime-200 flex items-end rounded-bl-[65%] text-violet-700 text-2xl pl-6 pb-4

                    sm:hidden
                `}
            />
            <NavMenu/>
            <GetInTouchBtn/>
        </div>

    </header>
  )
}