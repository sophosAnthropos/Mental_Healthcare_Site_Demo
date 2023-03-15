
export const FooterNavMenu = () => {

    return (
        <section
                className={`
                    w-1/4 h-[80%] border-b-4 border-r-4 border-purple-800 rounded-br-xl flex justify-end
                `}
            >
                <ul
                    className={`
                        w-[95%] h-full grid grid-cols-2 fa-solid tracking-widest text-lg text-blue-700
                    `}
                >
                    <li
                        className={`
                            flex justify-center items-center
                        `}
                    >
                        <a href="#"
                            className={`
                                 w-full flex justify-start
                            `}
                        >
                            Therapies
                        </a>
                    </li>
                    <li
                        className={`
                            flex justify-center items-center
                        `}
                    >
                        <a href="#"
                            className={`
                                 w-full flex justify-start
                            `}
                        >
                            About
                        </a>
                    </li>
                    <li
                        className={`
                            flex justify-center items-center
                        `}
                    >
                        <a href="#"
                            className={`
                                 w-full flex justify-start
                            `}
                        >
                            Between Sessions
                        </a>
                    </li>
                    <li
                        className={`
                            flex justify-center items-center
                        `}
                    >
                        <a href="#"
                            className={`
                                 w-full flex justify-start
                            `}
                        >
                            Contact
                        </a>
                    </li>
                    <li
                        className={`
                            flex justify-center items-center
                        `}
                    >
                        <a href="#"
                            className={`
                                 w-full flex justify-start
                            `}
                        >
                            Portal
                        </a>
                    </li>
                    <li
                        className={`
                            flex justify-center items-center
                        `}
                    >
                        <a href="#"
                            className={`
                                 w-full flex justify-start
                            `}
                        >
                            More
                        </a>
                    </li>
                </ul>
            </section>
    )
}

