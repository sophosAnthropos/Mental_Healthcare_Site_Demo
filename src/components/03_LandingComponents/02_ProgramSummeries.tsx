import React from 'react'
import { ProSummeryCards } from '../00_ReusableComponents/ProSummeryCards'
import CBTImage from '../../assets/Images/01_LandingPageImages/Programs/Cognitive-Behavioral-Therapy-CBT.png'
import DBTImage from '../../assets/Images/01_LandingPageImages/Programs/Dialetical-Behavioral-Therapy-DBT.png'
import PsychoDynamicImage from '../../assets/Images/01_LandingPageImages/Programs/psychodynamic.jpg'
import SolutionFocusedImage from '../../assets/Images/01_LandingPageImages/Programs/Puzzle.jpg'

export const ProgramSummeries = () => {
  return (
    <div
        className={`
            w-full
        `}
    >
        <div
            className={`
                w-full h-3/4 grid grid-cols-1 items-center justify-items-center

                sm:grid-cols-4
            `}
        >
            <ProSummeryCards 
                source={CBTImage} 
                heading='Cognitive Behavioral Therapy CBT' 
                bgNum={1}
                imgStyles='w-full h-full'
            >
                <p
                    className={`
                        h-2/3 px-6 text-sm text-justify text-violet-100 tracking-wide leading-8 flex items-center
                    
                        sm:therapyProgramText sm:px-8
                    `}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eum voluptatem placeat rerum animi quas neque minus velit vitae quia! Enim, perferendis! Nostrum corporis voluptate adipisci similique, fugiat consequatur maiores delectus doloribus placeat inventore et non, reiciendis provident. Ipsam, aspernatur.
                </p>
            </ProSummeryCards>
            <ProSummeryCards 
                source={DBTImage} 
                heading='Dialetical Behavioral Therapy DBT' 
                bgNum={2}
                imgStyles='w-[80%] h-[95%]'
            >
                <p
                className={`
                    h-2/3 px-6 text-sm text-justify text-violet-700 tracking-wide leading-8 flex items-center
                
                    sm:therapyProgramText sm:px-8
                `}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eum voluptatem placeat rerum animi quas neque minus velit vitae quia! Enim, perferendis! Nostrum corporis voluptate adipisci similique, fugiat consequatur maiores delectus doloribus placeat inventore et non, reiciendis provident. Ipsam, aspernatur.
                </p>
            </ProSummeryCards>
            <ProSummeryCards 
                source={SolutionFocusedImage} 
                heading='Solution Focused Brief Therapy SFBT' 
                bgNum={1}
                imgStyles='w-full h-full'
            >
                <p
                    className={`
                        h-2/3 px-6 text-sm text-justify text-violet-100 tracking-wide leading-8 flex items-center
                    
                        sm:therapyProgramText sm:px-8
                    `}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eum voluptatem placeat rerum animi quas neque minus velit vitae quia! Enim, perferendis! Nostrum corporis voluptate adipisci similique, fugiat consequatur maiores delectus doloribus placeat inventore et non, reiciendis provident. Ipsam, aspernatur.
                </p>
            </ProSummeryCards>
            <ProSummeryCards 
                source={PsychoDynamicImage} 
                heading='Psycho-Dynamic Therapy' 
                bgNum={2}
                imgStyles='w-full h-full'
            >
                <p
                className={`
                    h-2/3 px-6 text-sm text-justify text-violet-700 tracking-wide leading-8 flex items-center
                
                    sm:therapyProgramText sm:px-8
                `}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eum voluptatem placeat rerum animi quas neque minus velit vitae quia! Enim, perferendis! Nostrum corporis voluptate adipisci similique, fugiat consequatur maiores delectus doloribus placeat inventore et non, reiciendis provident. Ipsam, aspernatur.
                </p>
            </ProSummeryCards>
        </div>
    </div>
  )
}