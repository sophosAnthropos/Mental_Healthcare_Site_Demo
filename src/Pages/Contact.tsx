import { ContactMain } from '../components/06_ContactComponents/01_ContactMain'



export const Contact = () => {
  return (
    <>
      <div
        className={`
          w-full h-auto 
          
          sm:px-3 sm:py-4 
          sm:flex sm:items-center sm:justify-center 
          sm:bg-[url('../../../src/assets/Images/About_BG.png')] sm:bg-fit
        `}
      >
        <ContactMain />
      </div>
    </>
  )
}

