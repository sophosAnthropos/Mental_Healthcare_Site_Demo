import React from 'react'
import { SiteFooter } from '../components/02_FooterComponents/Footer'
import { SiteHeader } from '../components/01_HeaderComponents/header'
import { StaffCards } from '../components/05_AboutComponents/StaffCards'

export const About = (): JSX.Element => {
  return (
    <div
        className={`
            h-full
        `}
    >
        <SiteHeader/>
        <main
            className={`
              h-[1200px] bg-violet-50 flex flex-col items-center justify-around
            `}
        >
            <StaffCards num={1} />
            <StaffCards num={2} />
        </main>
        <SiteFooter/>
    </div>
  )
}