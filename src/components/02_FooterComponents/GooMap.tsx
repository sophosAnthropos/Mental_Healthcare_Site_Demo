

export const GoogMap = (): JSX.Element => {



    return (
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1510.8076089773037!2d-73.97032546108495!3d40.77048702416888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ2JzEzLjgiTiA3M8KwNTgnMDguNSJX!5e0!3m2!1sen!2sus!4v1684520107120!5m2!1sen!2sus" 
                
                className = {`
                    w-full h-[41%] border-y-2 border-violet-800
                    sm:h-[56%]
                    
                `}
                loading="lazy" 
            
            />
    )

}
