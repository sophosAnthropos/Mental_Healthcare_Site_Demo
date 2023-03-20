import { StaffCards } from '../components/05_AboutComponents/StaffCards'

export const About = (): JSX.Element => {
  return (
    <>
        <div
            className={`
              h-[1200px] bg-violet-50 flex flex-col items-center justify-around
            `}
        >
            <StaffCards num={1} />
            <StaffCards num={2} />
        </div>
    </>
  )
}