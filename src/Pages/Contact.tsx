import React from 'react'
import { ContactMain } from '../components/06_ContactComponents/ContactMain'
import { SiteFooter } from '../components/02_FooterComponents/Footer'
import { SiteHeader } from '../components/01_HeaderComponents/header'

export const Contact = () => {
  return (
    <div
      className={`
        bg-cyan-50
      `}
    >
      <SiteHeader/>
      <main
        className={`
          w-full h-auto px-3 py-4 flex items-center justify-center bg-[url('../../../src/assets/Images/About_BG.png')] bg-fit
        `}
      >
        <ContactMain />
      </main>
      <SiteFooter/>
    </div>
  )
}

