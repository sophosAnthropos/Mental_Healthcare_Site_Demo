import React from 'react'
import { SiteFooter } from '../components/FooterComponents/Footer'
import { SiteHeader } from '../components/HeaderComponents/header'
import { Introduction } from '../components/LandingComponents/Introduction'
import { ProgramSummeries } from '../components/LandingComponents/ProgramSummeries'

export const Landing = (): JSX.Element => {
  return (
    <div
        className={`
            h-full bg-gradient-to-br from-fuchsia-50 to-violet-50
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
                            w-[99%] h-[88%]  text-6xl text-violet-50 font-bold flex justify-center items-center border-2 border-violet-300
                        `}
                    >
                        THERAPIES
                    </h2>
                </div>
                <ProgramSummeries />
            </section>
        </main>
        <SiteFooter />
    </div>
  )
}