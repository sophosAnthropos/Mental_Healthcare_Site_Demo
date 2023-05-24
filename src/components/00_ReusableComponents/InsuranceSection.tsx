import React from 'react'
import { InsuranceCards } from './InsuranceCards'
import bcbs from '../../assets/Images/04_InsuranceLogos/BCBS.png'
import cenpatico from '../../assets/Images/04_InsuranceLogos/Cenpatico.png'
import cigna from '../../assets/Images/04_InsuranceLogos/Cigna.com.png'
import firstHealth from '../../assets/Images/04_InsuranceLogos/first-health.png'
import medicaid from '../../assets/Images/04_InsuranceLogos/Medicaid.png'
import molina from '../../assets/Images/04_InsuranceLogos/molina.png'
import selectHealth from '../../assets/Images/04_InsuranceLogos/selecthealth.png'
import unitedHC from '../../assets/Images/04_InsuranceLogos/United_Healthcare.png'
import wellcare from '../../assets/Images/04_InsuranceLogos/wellcare.png'

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
                            source={cigna}
                            heights='h-3/4'
                        />
                        <InsuranceCards 
                            source={unitedHC}
                            heights='h-3/4'
                        />


                        <InsuranceCards 
                            source={bcbs}
                            heights='h-2/3' 
                        />
                        <InsuranceCards 
                            source={firstHealth}
                            heights='h-2/3 sm:insuranceTwoThirdHeightImage'
                        />
                        <InsuranceCards 
                            source={wellcare}
                            heights='h-2/3 sm:insuranceTwoThirdHeightImage' 
                        />


                        <InsuranceCards 
                            source={molina}
                            heights='h-1/2'
                        />
                        <InsuranceCards 
                            source={cenpatico}
                            heights='h-1/2 sm:insuranceHalfHeightImage ' 
                        />


                        <InsuranceCards 
                            source={selectHealth}
                            heights='h-2/5 sm:insuranceTwoFifthsHeightImage' 
                        />


                        <InsuranceCards 
                            source={medicaid}
                            heights='h-1/3 sm:insuranceThirdHeightImage' 
                        />
                        
                    </div>
                </div>
            </section>
    )
}