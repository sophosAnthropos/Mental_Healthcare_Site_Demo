import { About } from '../Pages/About'
import { Contact } from '../Pages/Contact'
import { Landing } from '../Pages/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteHeader } from './01_HeaderComponents/header'
import { SiteFooter } from './02_FooterComponents/Footer'
import { Therapies } from '../Pages/Therapies'
import { BetweenSessions } from '../Pages/BetweenSessions'

export const App = (): JSX.Element => {
  

  return (
    <BrowserRouter>
        <div className={`
              h-full bg-purple-50
        `}>
            <SiteHeader/>
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
            <SiteFooter/>
        </div>
    </BrowserRouter>
    
  )
}
