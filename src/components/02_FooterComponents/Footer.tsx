import { TheMap } from "../../APIs/GoogleMaps"
import { FooterMain } from "./FooterMain"

export const SiteFooter = (): JSX.Element => {

    return (
        <footer
            className={`
                h-[70vh]
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
                    h-[7%] bg-violet-400 bg-opacity-55 flex justify-center
                `}
            >
                <p
                    className={`
                        w-1/2 h-full flex justify-center items-center text-violet-100 text-2xl
                    `}
                >
                    Website Developed by Christopher Krause <span className="pl-2">&#169;</span> 
                </p>
            </div>

        </footer>
    )

}