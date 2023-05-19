export const ContactForm = () => {
  return (
        <section
            className={`
                h-1/2
                sm:w-1/2 sm:h-full bg-white flex flex-col items-center justify-evenly
            `}
        >
                <header
                    className={`
                        w-[95%] h-1/6 flex items-center justify-center border-4 border-purple-400 border-dotted rounded-3xl
                    `}
                >
                    <h1
                        className={`
                            w-full h-1/2 flex justify-center items-end cuteScript text-4xl font-bold tracking-wider text-blue-400
                            sm:contactFormHeader 
                        `}
                    >
                        Let's get in touch
                    </h1>
                </header>
            
              <form className={`
                    w-[95%] h-3/4 flex flex-col border-4 border-purple-400 border-dotted rounded-3xl 
                    
                    sm:text-xl
              `}>

                
                <div 
                    className={`
                        w-full h-1/6 flex justify-center items-center
                    `}
                >
                    <label className={`fa-solid fa-user mr-3 sm:text-2xl text-blue-500`}></label>
                    <input 
                        className={`
                            w-4/5 h-1/2 rounded-lg pl-3 pt-1 bg-purple-200 font-bold ezRead text-blue-500 placeholder:text-blue-400 
                            focus:placeholder:text-blue-100 focus:text-lime-50 focus:bg-purple-400 
                            focus:outline-none focus:border-2 focus:border-purple-600

                            sm:w-2/3
                        `} 

                        id="name" type="text" placeholder="Name" data-sb-validations="required" 
                    />
                </div>

                
                <div className={`
                    w-full h-1/6 flex justify-center items-center
                `}>
                    <label className={`fa-solid fa-envelope mr-3 sm:text-2xl text-blue-500`}></label>
                
                    <input 
                        className={`
                            w-4/5 h-1/2 rounded-lg pl-3 pt-1 bg-purple-200 font-bold ezRead text-blue-500 placeholder:text-blue-400 
                            focus:placeholder:text-blue-100 focus:text-lime-50 focus:bg-purple-400 
                            focus:outline-none focus:border-2 focus:border-purple-600

                            sm:w-2/3
                        `} 
                        
                        id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" 
                    />
                </div>

                
                <div className={`
                    w-full h-1/2 flex justify-center items-center
                `}>
                    <textarea 
                        className={`
                            w-[90%] h-[90%] rounded-lg pl-3 pt-3 bg-purple-200 font-bold ezRead text-blue-500 placeholder:text-blue-400 
                            focus:placeholder:text-blue-100 focus:text-lime-50 focus:bg-purple-400 
                            focus:outline-none focus:border-2 focus:border-purple-600

                            sm:w-3/4
                        `} 
                        
                        id="message" placeholder="Message" data-sb-validations="required"
                    ></textarea>
                </div>
                
                <div className={`
                    w-full h-1/6 flex justify-center items-center
                `}>
                    <button 
                        className={`
                            bg-blue-400 h-2/3 w-1/3 rounded-xl text-white text-2xl font-bold
                        `} 
                        id="submitButton" 
                        type="submit"
                    >
                        SUBMIT
                    </button>
                </div>
              </form>
        </section>
  )
}

