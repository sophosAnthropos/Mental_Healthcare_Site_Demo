import React from 'react'
import PlaceholderImage from "../../assets/Images/01_LandingPageImages/Intro/ImgPlaceholder.png"



export const Introduction = ():JSX.Element => {
  return (
    <div
        className={`
            w-full h-[1000px] flex flex-col justify-center

            sm:fullMonitorWidth sm:h-[600px] sm:flex-row sm:py-7
        `}
    >
        <section
            className={`
                h-[36%] flex flex-col items-center py-4

                sm:introImageContainer sm:h-full sm:justify-center 
            `}
        >
            <img 
                src={PlaceholderImage} 
                alt="Placeholder image green gumdrop blob with cute eyes"
                className={`
                    
                    sm:introductionImage
                `} 
            />
            <p
                className={`
                    font-bold text-xl text-lime-500
                `}
            >Placeholder Image</p>
        </section>
        <article
            className={`
                w-full h-[64%] flex relative ezRead overflow-hidden

                sm:introTxtAndBgContainer sm:h-full sm:items-center sm:mx-6 sm:rounded-br-2xl
            `}
        >
            <div
                className={`
                    sm:w-[200%] sm:h-[200%] sm:bg-landingIntroBG sm:bg-cover
                `}
            >
                <div
                    className={`
                        w-full h-full flex flex-col items-center justify-evenly absolute bg-purple-50

                        sm:h-[98.5%] sm:top-0 sm:left-[-.75%] sm:rounded-br-xl
                    `}
                >
                    <h2
                        className={`
                            w-full h-[10%] flex items-center justify-center text-xl capitalize  font-bold text-blue-500 italic bg-purple-200

                            sm:introTxtSegments sm:h-1/5 sm:text-5xl sm:bg-inherit
                        `}
                    >
                        Let's Make A Difference
                    </h2>
                    <p
                        className={`
                            w-[90%] text-sm tracking-wide leading-7 text-violet-600 py-2
                        
                            sm:introTxtSegments sm:h-[26.5%] sm:text-lg sm:px-4 sm:leading-8
                        `}
                    >
                        Currently, in your life, you are experiencing insurmountable hardships, irresistible impulses, or neurological imbalances.  You've decided to fight back, said "NO MORE!", & with your hand extended for help, you have found yourself here. 
                    </p>
                    <p
                        className={`
                            w-[90%] text-sm tracking-wide leading-7 text-lime-600 py-2
                        
                            sm:introTxtSegments sm:h-[26.5%] sm:text-lg sm:px-4
                        `}
                    >
                        Rest assured, the help you seek awaits you with Jessie Doe.  As the guide for your journey, Jessie Doe will endow you with the skills that will get you to a destination you've longed to reach. Jessie Doe provides a sanctuary & an ear, so that you have a safe private eden to unload the troubles plaguing your heart & mind.  
                    </p>
                    <p
                        className={`
                            w-[90%] text-sm tracking-wide leading-7 text-blue-600 py-3
                        
                            sm:introTxtSegments sm:h-[26.5%] sm:text-lg sm:px-4 sm:leading-8
                        `}
                    >
                        Jessie Doe's honed experience & expertise, combined with impartial kindness, makes Jessie Doe someone who will make a difference. Reach out, so that Jessie Doe may impart on you the abilities needed to make you someone who will make a difference too.   
                    </p>
                </div>
            </div>
            
        </article>
    </div>
  )
}