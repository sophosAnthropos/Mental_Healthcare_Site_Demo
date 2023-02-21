import React from 'react'
import { ProSummeryCards } from '../00_ReusableComponents/ProSummeryCards'

export const ProgramSummeries = () => {
  return (
    <div
        className={`
            w-full
        `}
    >
        <div
            className={`
                w-full h-3/4 grid grid-cols-4 items-center justify-items-center
            `}
        >
            <ProSummeryCards source='../../../src/assets/Images/Cognitive-Behavioral-Therapy-CBT.png' heading='Cognitive Behavioral Therapy CBT' bgNum={1}/>
            <ProSummeryCards source='../../../src/assets/Images/Dialetical-Behavioral-Therapy-DBT.png' heading='Dialetical Behavioral Therapy DBT' bgNum={2}/>
            <ProSummeryCards source='../../../src/assets/Images/Puzzle.jpg' heading='Solution Focused Brief Therapy SFBT' bgNum={1}/>
            <ProSummeryCards source='../../../src/assets/Images/psychodynamic.jpg' heading='Psycho-Dynamic Therapy' bgNum={2}/>
        </div>
    </div>
  )
}