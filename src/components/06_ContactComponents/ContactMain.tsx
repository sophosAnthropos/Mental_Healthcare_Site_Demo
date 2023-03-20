import React from 'react'
import { AddressAndPhone } from '../02_FooterComponents/MainComps/AddressAndPhone'
import { ContactForm } from './ContactForm'
import { ContactInfoCard } from './ContactInfoCard'

export const ContactMain = () => {
  return (
    <div
        className={`
            w-[80%] h-[900px] AbtContainer
            
        `}
    >
        <div
          className={`
            w-[99.3%] h-[98.6%] bg-purple-100 rounded-[45px]
            relative top-[50%] left-[50%] overflow-hidden
            translate-x-[-50%] translate-y-[-50%] z-20
          `}
        >
            <div
            className={`
              bg-transparent
              w-full h-full 
              relative
              flex items-center justify-center
            `}
            >
              <main
                className={`
                  w-full h-full bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-md shadow-neutral-600 flex justify-center items-center
                `}
              >
                <ContactInfoCard/>
                <ContactForm/> 

              </main>

            </div>
        </div>
    </div>
  )
}
