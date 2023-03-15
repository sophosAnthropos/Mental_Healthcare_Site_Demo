import React from 'react'

export const Introduction = ():JSX.Element => {
  return (
    <div
        className={`
            w-full h-[600px] flex py-7
        `}
    >
        <section
            className={`
                w-1/3 h-full flex flex-col justify-center items-center py-4
            `}
        >
            <img 
                src="../../../src/assets/Images/ImgPlaceholder.png" 
                alt="Placeholder image green gumdrop blob with cute eyes"
                className={`
                    w-3/4 
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
                w-[65%] flex items-center overflow-hidden relative my-3 mx-6 rounded-br-2xl ezRead
            `}
        >
            <div
                className={`
                    w-[200%] h-[200%] bg-[url("../../../src/assets/Images/BgConceptTest.jpg")] bg-cover
                `}
            >
                <div
                    className={`
                        w-full h-[98.5%] flex flex-col items-center justify-center absolute top-0 left-[-.75%] bg-purple-50 rounded-br-xl
                    `}
                >
                    <h2
                        className={`
                            w-4/5 h-1/4 flex items-center justify-center text-5xl capitalize  font-bold text-blue-500 italic
                        `}
                    >
                        One Person Can Make A Difference
                    </h2>
                    <p
                        className={`
                            w-4/5 text-lg tracking-wide leading-7 text-violet-600 py-2 px-4
                        `}
                    >
                        Currently, in your life, you are experiencing insurmountable hardships, irresistible impulses, or neurological imbalances.  You've decided to fight back, said "NO MORE!", & with your hand extended for help, you have found yourself here. 
                    </p>
                    <p
                        className={`
                            w-4/5 text-lg tracking-wide leading-7 text-lime-600 py-2 px-4
                        `}
                    >
                        Rest assured, the help you seek awaits you with Caren Stewart.  As the guide for your journey, she will endow you with the skills that will get you to a destination you've longed to reach. Caren provides a sanctuary & an ear, so that you have a safe private eden to unload the troubles plaguing your mind & heart.  
                    </p>
                    <p
                        className={`
                            w-4/5 text-lg tracking-wide leading-7 text-blue-600 py-3 px-4
                        `}
                    >
                        Caren's honed experience & expertise, combined with impartial kindness, makes her someone who can make a difference. Reach out, so that she may impart on you the abilities needed to make you someone who can make a difference too.   
                    </p>
                </div>
            </div>
            
        </article>
    </div>
  )
}