import React from 'react'
import { SiteFooter } from '../components/02_FooterComponents/Footer'
import { SiteHeader } from '../components/01_HeaderComponents/header'
import { Introduction } from '../components/03_LandingComponents/Introduction'
import { ProgramSummeries } from '../components/03_LandingComponents/ProgramSummeries'
import { ListOfStruggles } from '../components/03_LandingComponents/ListOfStruggles'
import { Coverage } from '../components/03_LandingComponents/Coverage'

export const Landing = (): JSX.Element => {
  return (
    <div
        className={`
            h-full bg-purple-50
        `}
    >
        <SiteHeader />
        <main
            className={`
                w-full h-auto flex flex-col items-center
            `}
        >
            <Introduction />
            <section
                className={`
                    w-[95%] mb-5 
                `}
            >
                <div
                    className={`
                        w-full h-[8rem] bg-violet-700 flex justify-center items-center
                    `}
                >
                    <h2
                        className={`
                            w-[99%] h-[88%]  text-6xl text-violet-50 font-bold flex justify-center items-center border-2 border-violet-300 ez
                        `}
                    >
                        THERAPIES
                    </h2>
                </div>
                <ProgramSummeries />
                <ListOfStruggles />
                <Coverage />
            </section>
        </main>
        <SiteFooter />
    </div>
  )
}