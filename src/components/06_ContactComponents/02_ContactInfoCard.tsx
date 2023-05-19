import { PhoneFaxAddress } from "./03_PhoneFaxAddress"
import { HoursOfOperation } from "./04_HourOfOperation"

export const ContactInfoCard = () => {
  return (
        <section
            className={`
                h-1/2 bg-gradient-to-bl from-purple-100 to-purple-400
                sm:w-1/2 sm:h-full sm:flex sm:justify-center sm:items-center 
            `}
        >
            <div
                className={`
                    h-full flex flex-col justify-end border-y-4 border-blue-400 bg-white bg-opacity-60 backdrop-blur-lg shadow-lg
                    
                    sm:w-[85%] sm:h-[95%] sm:rounded-3xl sm:items-end sm:justify-evenly sm:border-4
                `}
            >
                <PhoneFaxAddress /> 
                <HoursOfOperation />
            </div>
                

        </section>
  )
}

