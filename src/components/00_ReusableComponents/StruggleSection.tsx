import React from 'react'

export const StruggleSection = ({section, children}: {section: string, children: JSX.Element}): JSX.Element => {

    let sectionStyle;

    const styler = (): string => {

        if (section === 'Domestic') {
            sectionStyle = 'h-[20%]'
        }
        else if (section === 'Personal') {
            sectionStyle = 'h-[45%] '
        }
        else {
            sectionStyle = 'h-[30%] '
        }

        return sectionStyle
    }

  return (
        <section
            className={`
                w-full ${styler()} flex flex-col items-center
            `}
        >
            <header
                className={`
                    w-[90%] h-[15%] flex items-center
                `}
            >
                <h2
                    className={`
                        ezRead text-4xl tracking-wider font-thin text-purple-700 underline

                        sm:text-6xl
                    `}
                >
                    {section}
                </h2>
            </header>
            <div
                className={`
                    w-full px-2 grid grid-cols-2 gap-1

                    sm:h-[85%] sm:grid-cols-4 sm:place-items-center sm:px-0 sm:gap-0
                `}
            >
                {children}
            </div>
        </section>
  )
}
