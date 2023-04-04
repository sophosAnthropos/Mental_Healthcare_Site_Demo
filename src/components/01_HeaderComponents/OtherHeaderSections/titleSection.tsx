import { Link } from "react-router-dom"

export const TitleSection = () => {

    return (
        <Link
            to="/"
            className={`
                    w-3/5 h-full flex flex-col items-center justify-center easyRead tracking-wider

                    sm:w-1/5 sm:p-4 sm:justify-start
                `}
        >
            <h1
                className={`
                    text-violet-800 text-xl font-bold
                    
                    sm:text-3xl sm:font-semibold 
                `}
            >
                CAREN STEWART
            </h1>
            <p
                className={`
                    text-violet-800 text-lg font-bold
                    
                    sm:text-2xl sm:font-semibold 
                `}
            >
                &
            </p>
            <h1
                className={`
                text-violet-800 text-xl font-bold
                
                sm:text-3xl sm:font-semibold  
            `}
            >
                ASSOCIATES
            </h1>

        </Link>
    )
}