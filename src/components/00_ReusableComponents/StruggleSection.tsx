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
                        ezRead text-6xl tracking-wider font-thin text-purple-700 underline
                    `}
                >
                    {section}
                </h2>
            </header>
            <div
                className={`
                    w-full h-[85%] grid grid-cols-4 place-items-center
                `}
            >
                {children}
            </div>
        </section>
  )
}
