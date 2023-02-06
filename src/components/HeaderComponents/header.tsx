import React from 'react'
import { GetInTouchBtn } from './getInTouchBtn'
import { NavMenu } from './NavigationMenu/Nav'
import { TitleSection } from './titleSection'
import { TopInfoBar } from './topInfoBar'

export const SiteHeader = () => {
  return (
    <header
        className={`
            h-[10rem] flex flex-col relative
        `}
    >
        <TopInfoBar/>
        <div
            className={`
               h-[8rem] flex justify-between bg-violet-200
            `}  
        >
            <TitleSection/>
            <NavMenu/>
            <GetInTouchBtn/>
        </div>

    </header>
  )
}