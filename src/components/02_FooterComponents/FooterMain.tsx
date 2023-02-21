import { AddressAndPhone } from "./MainComps/AddressAndPhone"
import { FaxEmailAndHotline } from "./MainComps/FaxEmailAndHotline"
import { FooterNavMenu } from "./MainComps/FooterNavMenu"

export const FooterMain = (): JSX.Element => {

    return (
        <main
            className={`
                h-[40%] bg-neutral-400 flex items-center justify-around
            `}
        >
            <AddressAndPhone/>
            <FaxEmailAndHotline/>
            <FooterNavMenu/>
        </main>
    )
}