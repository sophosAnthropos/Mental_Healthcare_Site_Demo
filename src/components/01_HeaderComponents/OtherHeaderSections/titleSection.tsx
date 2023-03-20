import { Link } from "react-router-dom"

export const TitleSection = () => {

    return (
        <Link
            to="/"
            className={`
                   w-1/6 h-full flex flex-col items-center p-4 easyRead tracking-wider
                `}
        >
            <h1
                className={`
                    text-violet-800 text-3xl font-semibold
                `}
            >
                CAREN STEWART
            </h1>
            <p
                className={`
                    text-violet-800 text-2xl font-semibold
                `}
            >
                &
            </p>
            <h1
                className={`
                text-violet-800 text-3xl font-semibold 
            `}
            >
                ASSOCIATES
            </h1>

        </Link>
    )
}