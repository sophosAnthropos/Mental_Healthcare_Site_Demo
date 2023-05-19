import { FooterMain } from "./FooterMain"
import { GoogMap } from "./GooMap"

export const SiteFooter = (): JSX.Element => {

    return (
        <footer
            className={`
                h-[90vh]
                sm:fullMonitorWidth sm:h-[70vh]
            `}
        >
            <GoogMap />

            <FooterMain />

            <div
                className={`
                    h-[4%]
                    sm:fullMonitorWidth sm:h-[6%] bg-violet-400 bg-opacity-55 flex justify-center
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
                            w-[30px] h-full flex items-center justify-end
                        `}
                    
                    >
                        &#169;
                    </span> 
                </p>
            </div>

        </footer>
    )

}