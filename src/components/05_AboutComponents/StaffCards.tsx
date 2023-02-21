import React from 'react'

export const StaffCards = ({num}: {num: number}): JSX.Element => {


  return (
    <div
        className={`
            w-[90%] h-[48%] flex items-center justify-around border-[1px] ${num === 1? 'bg-violet-400 border-violet-700 shadow-violet-900' : 'bg-blue-400 border-blue-700 shadow-blue-900'}  rounded-xl shadow-md 
        `}
    >
        {
            num === 1 ? 
                <>
                    <aside
                        className={`
                            w-1/4 h-full flex flex-col items-center justify-center
                        `}
                    >
                        <img src="../../../src/assets/Images/ImgPlaceholder.png" alt="green gumdrop with black eyes" />
                        <h2
                            className={`
                                text-2xl font-bold text-lime-300 easyRead
                            `}
                        >PLACEHOLDER IMAGE</h2>
                    </aside>
                    <article
                        className={`
                            w-3/4 h-full px-5 
                        `}
                    >
                        <header
                            className={`
                                w-full h-1/5 flex flex-col justify-center pt-4 cuteScript tracking-wider
                            `}
                        >
                            <h1
                                className={`
                                    w-full h-1/2 flex items-center justify-center text-lime-200 text-7xl font-bold
                                `}
                            >
                                Caren E. Stewart, 
                                <span className={`text-6xl pl-4`}> 
                                    LPCS PH. D. Candidate 
                                </span>
                            </h1>
                            <h2
                                className={`
                                    w-full h-1/2 flex items-end justify-center text-blue-50 text-2xl font-bold
                                `}
                            >
                                Licensed Professional Counselor, LAC, BCPCC
                            </h2>
                        </header>
                        <main
                            className={`
                                h-3/4 flex flex-col justify-center items-center text-[1.15rem] text-violet-200 easyRead
                            `}
                        >
                            <p
                                className={`
                                    w-[95%] h-[7%] font-semibold text-blue-200
                                `}
                            >
                                I approach my work with clients from a strength base & person-centered model utilizing a variety of clinical methods including:
                            </p>

                            <ul
                                className={`
                                    w-[95%] h-[12%] grid grid-cols-2 list-disc px-8 text-[1rem] font-semibold text-lime-200
                                `}
                            >
                                <li
                                    className={`
                                        
                                    `}
                                >Cognitive Behavioral Therapy, CBT</li>
                                <li
                                    className={`
                                        
                                    `}
                                >Dialectical Behavioral Therapy, DBT</li>
                                <li
                                    className={`
                                        
                                    `}
                                >Psycho-Dynamic Therapy</li>
                                <li
                                    className={`
                                        
                                    `}
                                >Solution Focused Brief Therapy, SFBT</li>
                            </ul>

                            <p
                                className={`
                                    w-[95%] h-[7%] font-semibold text-blue-200 
                                `}
                            >
                                My areas of specialty are mood & personality disorders  
                            </p>

                            <h3
                                className={`
                                    w-[95%] h-[7%] flex items-center pl-5 italic font-semibold text-lime-200
                                `}
                            >i.e.</h3>

                            <ul
                                className={`
                                    w-[95%] h-[14%] pl-10 grid grid-cols-4 justify-items-start list-disc text-[1rem] font-semibold text-lime-200
                                `}
                            >
                                <li
                                    className={`
                                        
                                    `}
                                >Major Depressive Disorder</li>
                                <li
                                    className={`
                                        
                                    `}
                                >Anxiety Disorders</li>
                                <li
                                    className={`
                                        
                                    `}
                                >Anger Management</li>
                                <li
                                    className={`
                                        
                                    `}
                                >Bipolar Disorder</li>
                                <li
                                    className={`
                                        
                                    `}
                                >Borderline Personality Disorder</li>
                                <li
                                    className={`
                                        
                                    `}
                                >Antisocial Personality Disorder</li>
                                <li
                                    className={`
                                        
                                    `}
                                >Dependent Personality Disorder</li>
                            </ul>

                            <p
                                className={`
                                    w-[95%] h-[20%] flex items-center text-justify font-semibold
                                `}
                            >
                                Stylistically, I strive to empower my clients toward a sense of control over their feelings & behaviors by encouraging them to become their own expert throughout the therapy journey.
                            </p>

                            <p
                                className={`
                                    w-[95%] h-[18%] flex items-center text-justify font-semibold 
                                `}
                            >
                                My hope is that through this matriculation, clients will gain greater insight & understanding about important connections between past & present experiences. They'll discover new ways of thinking, relating, & behaving so that life can take on new meaning while living life to its fullest potential.
                            </p>
                        </main>
                        
                    </article>
                </> 
            :
                <>
                    <article
                        className={`
                            w-3/4 h-full px-5
                        `}
                    >
                        <header
                            className={`
                                w-full h-1/5 flex flex-col justify-center pt-4 cuteScript tracking-wider
                            `}
                        >
                            <h1
                                className={`
                                    w-full h-1/2 flex items-center justify-center text-lime-200 text-7xl font-bold
                                `}
                            >Jackie L.L. Green</h1>
                            <h2
                                className={`
                                    w-full h-1/2 flex items-end justify-center text-violet-50 text-2xl font-bold
                                `}
                            >Executive Facility Curator & Full-Time Bedlam Navigator</h2>
                        </header>
                        <main
                            className={`
                                h-3/4 flex flex-col justify-center items-center text-[1.15rem] text-violet-200 easyRead
                            `}
                        >
                            <p
                                className={`
                                    w-[95%] h-[20%] flex items-center text-justify font-semibold
                                `}
                            >
                                I work diligently to keep your mind and soul at peace, starting from your intake and processing till the end of your healing and growth journey. I'll manage your coverage and appointments, while keeping in touch, so that you may stay in the loop while those matters stay off your plate. 
                            </p>
                            <p
                                className={`
                                    w-[95%] h-[20%] flex items-center text-justify font-semibold text-lime-200
                                `}
                            >
                                My hustle doesn't end at the office. With a Associates in Business Marketing, I am also a Masterclass Resume Writer, producing the best resumes for your job seeking needs.
                            </p>
                            <p
                                className={`
                                    w-[95%] h-[20%] flex items-center text-justify font-semibold
                                `}
                            >
                                Since feeling a strong sense of confidence and self worth is a major part maintain good mental health, I can also be a commissioned as your Professionally Licensed Cosmetologist.
                            </p>
                            <p
                                className={`
                                    w-[95%] h-[20%] flex items-center text-justify font-semibold text-lime-200
                                `}
                            >
                                Proudly, as an Executive Member of the Grand Strand Down Syndrome Society and Overseeing Event Coordinator for the Grand Strand Buddy Walk, I've been able to establish us as a clinic which maintains a strong supportive role in this regions Down Syndrome Community.  
                            </p>
                        </main>
                        
                    </article>
                    <aside
                        className={`
                            w-1/4 h-full flex flex-col items-center justify-center
                        `}
                    >
                        <img src="../../../src/assets/Images/ImgPlaceholderLookLeft.png" alt="green gumdrop with black eyes" />
                        <h2
                            className={`
                                text-2xl font-bold text-lime-300 easyRead
                            `}
                        >PLACEHOLDER IMAGE</h2>
                    </aside>

                </>
        }
    </div>
  )
}

