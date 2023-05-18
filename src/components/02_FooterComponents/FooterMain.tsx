import { AddressAndPhone } from "./MainComps/AddressAndPhone"
import { FaxEmailAndHotline } from "./MainComps/FaxEmailAndHotline"
import { FooterNavMenu } from "./MainComps/FooterNavMenu"

export const FooterMain = (): JSX.Element => {

    return (
        <main
            className={`
                h-[55%] bg-neutral-400 flex flex-col items-center justify-around
                sm:fullMonitorWidth sm:h-[38%] sm:flex-row
            `}
        >
            <AddressAndPhone/>
            <FaxEmailAndHotline/>
            <FooterNavMenu/>
        </main>
    )
}