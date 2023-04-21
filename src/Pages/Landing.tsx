import { Introduction } from '../components/03_LandingComponents/Introduction'
import { ProgramSummeries } from '../components/03_LandingComponents/ProgramSummeries'
import { ListOfStruggles } from '../components/03_LandingComponents/ListOfStruggles'
import { Coverage } from '../components/03_LandingComponents/Coverage'

export const Landing = (): JSX.Element => {
  return (
        <>
            <Introduction />
            <section
                className={`
                    mb-5
                    
                    sm:w-[95%]
                `}
            >
                <div
                    className={`
                        w-full h-[8rem] bg-violet-700 flex justify-center items-center
                    `}
                >
                    <h2
                        className={`
                            w-[97%] h-[88%]  text-6xl text-violet-50 font-bold flex justify-center items-center border-2 border-violet-300 ez

                            sm:w-[99%]
                            
                        `}
                    >
                        THERAPIES
                    </h2>
                </div>
                <ProgramSummeries />
                <ListOfStruggles />
                <Coverage />
            </section>
        </>
  )
}