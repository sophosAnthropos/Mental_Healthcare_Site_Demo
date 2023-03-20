import { ContactMain } from '../components/06_ContactComponents/ContactMain'

export const Contact = () => {
  return (
    <>
      <div
        className={`
          w-full h-auto px-3 py-4 flex items-center justify-center bg-[url('../../../src/assets/Images/About_BG.png')] bg-fit
        `}
      >
        <ContactMain />
      </div>
    </>
  )
}

