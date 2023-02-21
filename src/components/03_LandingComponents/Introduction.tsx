import React from 'react'

export const Introduction = ():JSX.Element => {
  return (
    <div
        className={`
            w-full flex py-7
        `}
    >
        <section
            className={`
                w-1/3 h-full flex flex-col justify-center items-center py-4
            `}
        >
            <img 
                src="../../../src/assets/Images/ImgPlaceholder.png" 
                alt="Placeholder image green gumdrop blob with cute eyes"
                className={`
                    w-3/4 
                `} 
            />
            <p
                className={`
                    font-bold text-xl text-lime-500
                `}
            >Placeholder Image</p>
        </section>
        <article
            className={`
                w-[65%] flex items-center overflow-hidden relative my-3 mx-6 rounded-br-2xl easyRead
            `}
        >
            <div
                className={`
                    w-[200%] h-[200%] bg-[url("../../../src/assets/Images/BgConceptTest.jpg")] bg-cover
                `}
            >
                <div
                    className={`
                        w-full h-[98%] flex flex-col items-center justify-center absolute top-0 left-[-.75%] bg-violet-50 rounded-br-xl
                    `}
                >
                    <h2
                        className={`
                            w-4/5 h-1/4 flex items-center justify-center text-5xl capitalize  font-bold text-blue-500
                        `}
                    >
                        One Person Can Make A Difference
                    </h2>
                    <p
                        className={`
                            w-4/5 h-[2/3] text-lg tracking-wide leading-8 text-violet-700 py-3 px-5
                        `}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veritatis at unde perspiciatis omnis nesciunt explicabo hic molestias cupiditate molestiae deleniti nam obcaecati, necessitatibus in fugit officia eligendi debitis voluptates ea voluptatibus consequatur eum eaque. Asperiores beatae ullam repellat, commodi consectetur earum exercitationem quod laborum facilis nam quisquam! Impedit illum repellendus nisi architecto officiis? Deserunt animi repellat omnis quisquam quis doloremque alias magnam cumque!
                    </p>
                </div>
            </div>
            
        </article>
    </div>
  )
}