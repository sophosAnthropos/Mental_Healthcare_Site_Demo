import React from 'react'
import { GetInTouchBtn } from './OtherHeaderSections/getInTouchBtn'
import { NavMenu } from './NavigationMenu/Nav'
import { TitleSection } from './OtherHeaderSections/titleSection'
import { TopInfoBar } from './OtherHeaderSections/topInfoBar'

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
               h-[8rem] flex justify-between bg-violet-100
            `}  
        >
            <TitleSection/>
            <NavMenu/>
            <GetInTouchBtn/>
        </div>

    </header>
  )
}