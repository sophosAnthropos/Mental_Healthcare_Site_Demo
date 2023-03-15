import React from 'react'
import { InsuranceCards } from './InsuranceCards'

export const InsuranceSection = () => {
    return (
        <section
                className={`
                    w-[69%] h-full flex flex-col justify-center ezRead
                `}
            >
                <div
                    className={`
                        h-[12%] flex justify-center items-center text-3xl underline tracking-wide font-bold text-blue-400
                    `}
                >
                    <h2>
                        Accepted Insurance Plans
                    </h2>
                </div>
                <div
                    className={`
                        h-4/5
                    `}
                >
                    <div
                        className={`
                            w-full h-full grid grid-cols-3 justify-items-center place-items-center
                        `}
                    >
                        <InsuranceCards 
                            source='../../../src/assets/Images/InsuranceLogos/BCBS.png'
                            heights='h-2/3' 
                        />
                        <InsuranceCards 
                            source='../../../src/assets/Images/InsuranceLogos/Cigna.com.png'
                            heights='h-3/4'
                        />
                        <InsuranceCards 
                            source='../../../src/assets/Images/InsuranceLogos/first-health.png'
                            heights='h-2/3'
                        />
                        <InsuranceCards 
                            source='../../../src/assets/Images/InsuranceLogos/Medicaid.png'
                            heights='h-1/3' 
                        />
                        <InsuranceCards 
                            source='../../../src/assets/Images/InsuranceLogos/molina.png'
                            heights='h-1/2'
                        />
                        <InsuranceCards 
                            source='../../../src/assets/Images/InsuranceLogos/selecthealth.png'
                            heights='h-2/5' 
                        />
                        <InsuranceCards 
                            source='../../../src/assets/Images/InsuranceLogos/United_Healthcare.png'
                            heights='h-3/4'
                        />
                        <InsuranceCards 
                            source='../../../src/assets/Images/InsuranceLogos/Cenpatico.png'
                            heights='h-1/2' 
                        />
                        <InsuranceCards 
                            source='../../../src/assets/Images/InsuranceLogos/wellcare.png'
                            heights='h-2/3' 
                        />
                    </div>
                </div>
            </section>
    )
}