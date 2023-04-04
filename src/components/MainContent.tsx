import {Route, Routes} from 'react-router-dom'
import { About } from '../Pages/About'
import { Contact } from '../Pages/Contact'
import { Landing } from '../Pages/Landing'
import { Therapies } from '../Pages/Therapies'
import { BetweenSessions } from '../Pages/BetweenSessions'

export const MainContent = (): JSX.Element => {

    return (
        <main
              className={`
                 w-full h-auto flex flex-col items-center
              `}
            >
              <Routes  >
                  <Route path='/' element={<Landing/>} />
                  <Route path='/about' element={<About/>} />
                  <Route path='/contact' element={<Contact/>} />
                  <Route path='/therapies' element={<Therapies/>} />
                  <Route path='/between_session' element={<BetweenSessions/>} />
              </Routes>
        </main>
    )

}