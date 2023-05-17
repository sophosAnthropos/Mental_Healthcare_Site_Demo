import React, { useState } from 'react'
import { GetInTouchBtn } from './OtherHeaderSections/03_getInTouchBtn'
import { NavMenu } from './NavigationMenu/Nav'
import { TitleSection } from './OtherHeaderSections/02_titleSection'
import { TopInfoBar } from './OtherHeaderSections/01_topInfoBar'

export const SiteHeader = (
    {
        getScreen
    }: {
        getScreen: ()=>{ width: number, height: number}
    }
) => {


    const [open, setOpen] = useState(false)



    return (
        <header
            className={`
                flex flex-col 
                sm:w-full sm:h-[10rem] 
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
                    onClick={()=>{setOpen(!open)}}
                    className={`
                        w-[2rem] h-[2rem] fixed top-4 right-5 text-lime-400 text-2xl z-[400] ${open ? "fa-solid fa-times" : "fa-solid fa-bars"}

                        sm:hidden
                    `}
                />
                <NavMenu
                    open = {open}
                    close = {setOpen}
                    getScreen = {getScreen()}
                />
                <GetInTouchBtn/>
            </div>

        </header>
    )
}