import React from 'react'
import { BasicCosts } from '../00_ReusableComponents/BasicCosts'
import { InsuranceCards } from '../00_ReusableComponents/InsuranceCards'
import { InsuranceSection } from '../00_ReusableComponents/InsuranceSection'

export const Coverage = () => {
  return (
    <div
        className={`
            bg-blue-50 py-4 rounded-[40px] border-4 border-blue-200 shadow-md shadow-neutral-400
        `}
    >
        <header
            className={`
                w-full h-[8rem] flex flex-col items-center
            `}
        >
            <h2
                className={`
                    w-full h-1/2 flex justify-center items-center ezRead text-5xl font-bold tracking-wide text-purple-400
                `}
            >
                Costs & Coverage
            </h2>
            <h3
                className={`
                    w-2/3 h-1/2 flex justify-center items-center 
                    cuteScript text-[1.5rem] tracking-widest text-blue-700
                    border-2 border-blue-700
                `}
            >
                Request a free 15 min consultation when you call or email Caren E. Stewart
            </h3>
        </header>
        <main
            className={`
                h-[700px] flex flex-col justify-center items-center
            `}
        >
            <div
                className={`
                    w-[90%] h-full flex justify-between items-center
                `}
            >
                <BasicCosts/>
                <div
                    className={`
                        w-[5px] h-4/5 bg-purple-200 rounded-full
                    `}
                >

                </div>
                <InsuranceSection />
            </div>
            <div
                className={`
                    w-full h-[50px] flex justify-center items-center text-xl text-red-500 tracking-wide font-bold
                `}
            >
                <p>Verify your insurance coverage when arranging your first visit.  HMO and PPO plans accepted. </p>
            </div>
        </main>
    </div>
  )
}