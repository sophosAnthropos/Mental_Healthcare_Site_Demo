import React from 'react'
import { AddressAndPhone } from '../02_FooterComponents/MainComps/AddressAndPhone'
import { ContactForm } from './ContactForm'
import { ContactInfoCard } from './ContactInfoCard'

export const ContactMain = () => {
  return (
    <div
        className={`
            h-[1200px]
            sm:w-[80%] sm:h-[900px] sm:contactContainer
            
        `}
    >
        <div
          className={`
            h-full
          
            sm:w-[99.3%] sm:h-[98.6%] bg-purple-100 sm:rounded-[45px]
            sm:relative sm:top-[50%] sm:left-[50%] sm:overflow-hidden
            sm:translate-x-[-50%] sm:translate-y-[-50%] sm:z-20
          `}
        >
            <div
            className={`
              h-full
            
              sm:bg-transparent
              sm:w-full sm:h-full 
              sm:relative
              sm:flex sm:items-center justify-center
            `}
            >
              <main
                className={`
                  w-full h-full
                  
                  sm:bg-white sm:bg-opacity-20 sm:backdrop-blur-sm sm:rounded-lg sm:shadow-md sm:shadow-neutral-600 sm:flex sm:justify-center sm:items-center bg-red-400
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
