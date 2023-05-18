import React from 'react'
import { InsuranceCards } from './InsuranceCards'

export const InsuranceSection = () => {
    return (
        <section
                className={`
                    w-full h-[600px] flex flex-col ezRead pt-5

                    sm:w-[69%] sm:h-full sm:justify-center sm:pt-0
                `}
            >
                <div
                    className={`
                        h-[12%] flex justify-center items-center text-2xl underline tracking-wide font-bold text-blue-400
                        sm:text-4xl
                    `}
                >
                    <h2>
                        Accepted Insurance Plans
                    </h2>
                </div>
                <div
                    className={`
                        h-1/2
                    
                        sm:h-4/5
                    `}
                >
                    <div
                        className={`
                            w-full h-full grid grid-cols-2 justify-items-center place-items-center

                            sm:grid-cols-3 sm:h-full
                        `}
                    >
                        <InsuranceCards 
                            source='../../../src/assets/Images/InsuranceLogos/Cigna.com.png'
                            heights='h-3/4'
                        />
                        <InsuranceCards 
                            source='../../../src/assets/Images/InsuranceLogos/United_Healthcare.png'
                            heights='h-3/4'
                        />


                        <InsuranceCards 
                            source='../../../src/assets/Images/InsuranceLogos/BCBS.png'
                            heights='h-2/3' 
                        />
                        <InsuranceCards 
                            source='../../../src/assets/Images/InsuranceLogos/first-health.png'
                            heights='h-2/3 sm:insuranceTwoThirdHeightImage'
                        />
                        <InsuranceCards 
                            source='../../../src/assets/Images/InsuranceLogos/wellcare.png'
                            heights='h-2/3 sm:insuranceTwoThirdHeightImage' 
                        />


                        <InsuranceCards 
                            source='../../../src/assets/Images/InsuranceLogos/molina.png'
                            heights='h-1/2'
                        />
                        <InsuranceCards 
                            source='../../../src/assets/Images/InsuranceLogos/Cenpatico.png'
                            heights='h-1/2 sm:insuranceHalfHeightImage ' 
                        />


                        <InsuranceCards 
                            source='../../../src/assets/Images/InsuranceLogos/selecthealth.png'
                            heights='h-2/5 sm:insuranceTwoFifthsHeightImage' 
                        />


                        <InsuranceCards 
                            source='../../../src/assets/Images/InsuranceLogos/Medicaid.png'
                            heights='h-1/3 sm:insuranceThirdHeightImage' 
                        />
                        
                    </div>
                </div>
            </section>
    )
}