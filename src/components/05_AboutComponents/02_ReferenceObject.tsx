
const cardTitles = (name:string, title:string) => {
    return (
        <header
            className={`
                h-[15%] flex flex-col justify-center pt-4 cuteScript tracking-wider
                sm:w-full sm:h-1/5
            `}
        >
            <h1
                className={`
                    text-3xl
                    w-full h-1/2 flex items-end justify-center text-lime-200 font-bold
                    sm:items-center sm:aboutCardHeader
                `}
            >
                {name} 
            </h1>
            <h2
                className={`
                    text-lg text-center
                    w-full h-1/2 flex items-center justify-center text-blue-50 font-bold
                    sm:items-center sm:text-2xl
                `}
            >
                {title}
            </h2>
        </header>

    )
}



export const StaffReferences: Record<number, JSX.Element> = {
    1: 
        <article
            className={`
                h-[70%] px-4
                sm:w-3/4 sm:h-full sm:px-5 
            `}
        >
            {cardTitles("Jessie Doe, PH. D", "LPCS, Licensed Professional Counselor, LAC, BCPCC")}
            
            <main
                className={`
                    text-sm h-[85%] flex flex-col items-center justify-evenly text-violet-100 easyRead
                    sm:h-[80%] sm:aboutCardPersonTextMain sm:leading-7 sm:justify-center
                `}
            >

                <div 
                    className={` 
                        w-full h-1/4 flex flex-col justify-around text-justify
                        sm:h-[25%] sm:justify-between

                    `}
                >
                        <p
                            className={`
                                w-full text-blue-700 font-semibold
                                sm:h-[40%] sm:flex sm:items-center sm:text-blue-200
                            `}
                        >
                            Jessie Doe's methodology focuses on your strengths, interests, capabilities, & resources when utilizing the following treatments:
                        </p>

                        <ul
                            className={`
                                w-full h-[55%] grid grid-cols-1 list-disc pl-5 font-semibold text-lime-200
                                sm:h-[60%] sm:px-8 sm:grid-cols-2 sm:text-base
                            `}
                        >
                            <li> Cognitive Behavioral Therapy, CBT </li>
                            <li> Dialectical Behavioral Therapy, DBT </li>
                            <li> Psycho-Dynamic Therapy </li>
                            <li> Solution Focused Brief Therapy, SFBT </li>
                        </ul>
                </div>
                


                <div 
                    className={`
                        w-full h-[37%] flex flex-col justify-between items-center
                        
                        sm:h-[40%] sm:justify-start sm:items-start sm:aboutCardPersonOneTextAlt
                    `}
                >
                        <p
                            className={`
                                w-full flex items-center text-justify font-semibold
                                sm:h-[50%]
                            `}
                        >
                            Jessie Doe finds that by raising awareness of the positives at your disposal & then leveraging them, you strip the power from the struggles that were leaving you feeling helpless. As for the therapies, well Jessie Doe understands that pairing issues & treatments correctly allow success rates between 77% & 82% as reported in numerous case studies.
                        </p>

                        <p
                            className={`
                                w-full flex items-start text-justify font-semibold
                                sm:h-[40%] sm:items-center
                            `}
                        >
                            Jessie Doe's repertoire allows switching or blending therapies, to find greater success in your treatment. Jessie Doe encourages sticking with the medications that work best for you while you do these therapies to raise you success even further.  
                        </p>

                </div>
                

                <div 
                    className={` 
                        w-full h-1/3 flex flex-col justify-evenly
                        
                        sm:h-[30%] sm:justify-evenly
                    `}
                >
                        <p
                            className={`
                                w-full font-semibold text-blue-700
                                
                                sm:h-[18%] sm:text-blue-200
                            `}
                        >
                            Jessie Doe's areas of specialty are mood & personality disorders  
                        </p>

                        <h3
                            className={`
                                w-full flex items-center pl-5 italic font-semibold text-lime-200
                                
                                sm:h-[18%]
                            `}
                        >
                            i.e.
                        </h3>

                        <ul
                            className={`
                                w-full  pl-10 grid grid-cols-1 justify-items-start list-disc text-sm font-semibold text-lime-200

                                sm:h-[64%] sm:grid-cols-4 sm:text-[1rem] sm:place-content-evenly
                            `}
                        >
                            <li> Major Depressive Disorder </li>

                            <li> Anxiety Disorders </li>

                            <li> Anger Management </li>

                            <li> Bipolar Disorder </li>

                            <li> Borderline Personality Disorder </li>

                            <li> Antisocial Personality Disorder </li>

                            <li> Dependent Personality Disorder </li>

                        </ul>
                </div>

                
            </main>
            
        </article>    
    ,

    2:
        <article
            className={`
                h-[70%] px-4
                sm:w-3/4 sm:h-full sm:px-5
            `}
        >
            {cardTitles("Alex Doe", "Executive Facility Curator & Full-Time Bedlam Navigator")}
            <main
                className={`
                    text-sm h-[85%] flex flex-col items-center justify-evenly text-violet-100 easyRead
                    sm:h-3/4 sm:aboutCardPersonTextMain sm:leading-7
                `}
            >
                <p
                    className={`
                        w-[95%] h-[25%] flex items-center text-justify font-semibold 
                        sm:h-[20%]
                    `}
                >
                    Alex Doe works diligently to keep your mind & soul at peace, starting from your intake & processing till the end of your healing & growth journey. They'll manage your coverage & appointments, while keeping in touch, so that you may stay in the loop while those matters stay off your plate. 
                </p>
                <p
                    className={`
                        w-[95%] h-[15%] flex items-center text-justify font-semibold text-lime-200 
                        sm:h-[20%]
                    `}
                >
                    Alex Doe's hustle doesn't end at the office. They maintain reachability via text messaging, should you need to inform us of any changes that need to be made to your upcoming appointments ASAP.
                </p>
                <p
                    className={`
                        w-[95%] h-[20%] flex items-center text-justify font-semibold
                        sm:h-[20%]
                    `}
                >
                    Alex Doe is also someone who utilizes the therapies for their own struggles, & understands what it is like on the other side of the desk. As a result Alex Doe keeps the facility area warm & welcoming by providing a positively friendly but a down to earth interaction.
                </p>
                <p
                    className={`
                        w-[95%] h-[25%] flex items-center text-justify font-semibold text-lime-200
                        sm:h-[20%]
                    `}
                >
                    Proudly, Alex Doe volunteers time to organizations involved with local drives & fundraisers revolving around issues of mental health and disorders.  Alex encourages you to inquire about the local organizations, as community is one more opportunity to improve your ability to succeed on your journey. 
                </p>
            </main>
            
        </article>
    ,
}