import inDevelopmentImage from '../../assets/Images/Page_In_Development.png'

export const PageInDevelopment = ():JSX.Element => {

    return (
        <div
            className={`
                w-full h-[800px] bg-yellow-100 flex flex-col justify-evenly items-center
            `}
        >
            <h1
                className={`
                    w-1/2 h-[60px] flex justify-center items-center text-5xl cuteScript tracking-widest font-bold text-neutral-600
                `}
            >
                COMING SOON!
            </h1>
            <img 
            
                src={inDevelopmentImage}
            
                alt="Construction girl apologetically stating Page is under constructions. We are working on it." 

                className={`
                    
                `}
            
            />
        </div>

    )
}