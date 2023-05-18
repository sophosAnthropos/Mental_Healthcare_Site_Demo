
export const FooterNavMenu = () => {

    return (
        <section
                className={`
                    w-[98%] h-1/3 mb-1 border-b-4 border-r-4 border-purple-800 rounded-br-xl flex justify-end
                    sm:footerNavMenu sm:h-[80%] sm:mb-0 
                `}
            >
                <ul
                    className={`
                        w-[99%] h-full grid grid-cols-3 fa-solid tracking-widest text-sm text-blue-700
                        sm:w-full sm:text-lg sm:grid-cols-2
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
                                 w-full flex flex-col justify-start
                                 
                            `}
                        >
                            <p>Between</p>
                            <p>Sessions</p>
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

