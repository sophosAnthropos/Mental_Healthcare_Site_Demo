import { StaffCards } from '../components/05_AboutComponents/01_StaffCards'

export const About = (): JSX.Element => {
  return (
    <>
        <div
            className={`
              h-[2500px]

              sm:h-[1600px] bg-violet-50 flex flex-col items-center justify-around
            `}
        >
            <StaffCards num={1} />
            <StaffCards num={2} />
        </div>
    </>
  )
}