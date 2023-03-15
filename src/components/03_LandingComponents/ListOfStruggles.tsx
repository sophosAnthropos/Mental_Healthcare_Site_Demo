import React from 'react'
import { StruggleSection } from '../00_ReusableComponents/StruggleSection'
import { StruggleCard } from '../00_ReusableComponents/StruggleCard'

export const ListOfStruggles = () => {
  return (
    <div
        className={`
        w-full h-[1800px] rounded-2xl mt-5 flex flex-col items-center
        `}
    >
        <div
            className={`
                w-full h-[8%] flex justify-center items-center
            `}
        >
            <h2
                className={`
                    w-[75%] h-[94%] text-6xl text-lime-400  flex justify-center items-center ezRead
                `}
            >
                WHAT WE HELP YOU OVERCOME
            </h2>
        </div>
        <StruggleSection section='Neurological'>
            <>
                <StruggleCard struggle="Antisocial Personality" category="mental" />
                <StruggleCard struggle="Asperger's Syndrome " category="mental" />
                <StruggleCard struggle="Anxiety" category="mental" />
                <StruggleCard struggle="Autism" category="mental" />
                <StruggleCard struggle="Bipolar Disorder" category="mental" />
                <StruggleCard struggle="Borderline Personality Disorders" category="mental" />
                <StruggleCard struggle="Dissociative Identity Disorder" category="mental" />
                <StruggleCard struggle="Intellectual Disability" category="mental" />
                <StruggleCard struggle="Major Depressive Disorder" category="mental" />
                <StruggleCard struggle="Narcissistic Personality Disorder" category="mental" />
                <StruggleCard struggle="Obsessive Compulsive Disorder" category="mental" />
                <StruggleCard struggle="Oppositional Defiance Disorder" category="mental" />
                <StruggleCard struggle="Post Traumatic Stress Disorder" category="mental" />
                <StruggleCard struggle="Psychosis" category="mental" />
            </>
        </StruggleSection>
        <div className={`w-3/4 h-[4px] bg-purple-100 mt-10`}></div>
        <StruggleSection section='Personal' >
            <>
                <StruggleCard struggle="Addiction" category="personal" />
                <StruggleCard struggle="Anger Management" category="personal" />
                <StruggleCard struggle="Alcohol Use" category="personal" />
                <StruggleCard struggle="Behavioral Issues" category="personal" />
                <StruggleCard struggle="Career Counseling" category="personal" />
                <StruggleCard struggle="Chronic Impulsivity" category="personal" />
                <StruggleCard struggle="Chronic Pain" category="personal" />
                <StruggleCard struggle="Codependency" category="personal" />
                <StruggleCard struggle="Coping skills" category="personal" />
                <StruggleCard struggle="Eating Disorders" category="personal" />
                <StruggleCard struggle="Emotional Disturbances" category="personal" />
                <StruggleCard struggle="Gambling" category="personal" />
                <StruggleCard struggle="Grief" category="personal" />
                <StruggleCard struggle="Internet Addiction" category="personal" />
                <StruggleCard struggle="Life Coaching" category="personal" />
                <StruggleCard struggle="Obesity" category="personal" />
                <StruggleCard struggle="Self Esteem" category="personal" />
                <StruggleCard struggle="Self-Harming" category="personal" />
                <StruggleCard struggle="Spirituality" category="personal" />
                <StruggleCard struggle="Substance Use" category="personal" />
                <StruggleCard struggle="Suicidal Ideation" category="personal" />
                <StruggleCard struggle="Weight Loss" category="personal" />
            </>
        </StruggleSection>
        <div className={`w-3/4 h-[4px] bg-purple-100 my-7`}></div>
        <StruggleSection section='Domestic' >
            <>
                <StruggleCard struggle="Child" category="domestic" />
                <StruggleCard struggle="Divorce" category="domestic" />
                <StruggleCard struggle="Domestic Abuse" category="domestic" />
                <StruggleCard struggle="Family Conflict" category="domestic" />
                <StruggleCard struggle="Parenting" category="domestic" />
                <StruggleCard struggle="Relationship Issues" category="domestic" />
                <StruggleCard struggle="Sexual Abuse" category="domestic" />
            </>
        </StruggleSection>
    </div>
  )
}