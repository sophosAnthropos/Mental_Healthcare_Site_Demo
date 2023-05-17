import { Link } from "react-router-dom"

export const TitleSection = () => {

    return (
        <Link
            to="/"
            className={`
                    w-3/5 h-full flex flex-col items-center justify-center easyRead tracking-wider

                    sm:w-1/5 sm:p-4
                `}
        >
            <h1
                className={`
                    text-violet-800 text-xl font-bold
                    
                    sm:text-3xl sm:font-semibold 
                `}
            >
                JESSIE DOE
            </h1>
            <h1
                className={`
                text-violet-800 text-xl font-bold text-center
                
                sm:text-lg sm:font-semibold  
            `}
            >
                MENTAL HEALTH THERAPY
            </h1>

        </Link>
    )
}