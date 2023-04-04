import { TheMap } from "../../APIs/GoogleMaps"
import { FooterMain } from "./FooterMain"

export const SiteFooter = (): JSX.Element => {

    return (
        <footer
            className={`
                h-[90vh]
                sm:h-[70vh]
            `}
        >
            <div 
                className={`
                    h-[60%] border-t-2 border-violet-800
                `}
            >
                <TheMap/>
            </div>
            <FooterMain />
            <div
                className={`

                    sm:h-[7%] bg-violet-400 bg-opacity-55 flex justify-center
                `}
            >
                <p
                    className={`
                        h-full flex justify-center items-center text-violet-100 
                        sm:w-1/2 sm:text-2xl
                    `}
                >
                    Website Developed by Christopher Krause 
                    <span 
                        className={`
                            pl-2
                        `}
                    
                    >
                        &#169;
                    </span> 
                </p>
            </div>

        </footer>
    )

}