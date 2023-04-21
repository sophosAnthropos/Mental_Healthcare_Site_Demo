import React from 'react'
import { BasicCosts } from '../00_ReusableComponents/BasicCosts'
import { InsuranceCards } from '../00_ReusableComponents/InsuranceCards'
import { InsuranceSection } from '../00_ReusableComponents/InsuranceSection'

export const Coverage = () => {
  return (
    <div
        className={`
            h-[1200px] bg-blue-50 py-4 border-4 border-blue-200 shadow-md shadow-neutral-400

            sm:rounded-[40px]
        `}
    >
        <header
            className={`
                w-full h-[15rem] flex flex-col items-center justify-evenly

                sm:h-[8rem] sm:justify-start
            `}
        >
            <h2
                className={`
                    w-full h-1/4 flex justify-center items-center ezRead text-4xl font-bold tracking-wide text-purple-400 text-center

                    sm:h-1/2 sm:text-5xl
                `}
            >
                Costs & Coverage
            </h2>
            <h3
                className={`
                    w-[95%] h-1/2 flex justify-center items-center 
                    cuteScript text-lg tracking-widest text-blue-700
                    border-2 border-blue-700 px-2

                    sm:w-2/3 sm:h-1/2 sm:text-[1.5rem] sm:px-0
                `}
            >
                Request a free 15 min consultation when you call or email Caren E. Stewart
            </h3>
        </header>
        <main
            className={`
                h-[900px] flex flex-col justify-center items-center
            `}
        >
            <div
                className={`
                    h-full flex flex-col justify-between items-center

                    sm:w-[90%] sm:flex-row
                `}
            >
                <BasicCosts/>
                <div
                    className={`
                        w-[90%] h-[6px] bg-purple-200 rounded-full

                        sm:w-[5px] sm:h-4/5 
                    `}
                >

                </div>
                <InsuranceSection />
            </div>
            <div
                className={`
                    w-full h-[90px] flex justify-center items-center text-sm text-red-500 tracking-wide font-bold text-center

                    sm:h-[50px] sm:text-xl
                `}
            >
                <p>Verify your insurance coverage when arranging your first visit.  HMO and PPO plans accepted. </p>
            </div>
        </main>
    </div>
  )
}