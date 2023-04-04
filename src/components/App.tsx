import { BrowserRouter} from 'react-router-dom'
import { SiteHeader } from './01_HeaderComponents/header'
import { SiteFooter } from './02_FooterComponents/Footer'
import { MainContent } from './MainContent'


export const App = (): JSX.Element => {
  

  return (
    <BrowserRouter>
        <div className={`
            w-full h-full bg-purple-50

              
        `}>
            <SiteHeader/>
            <SiteFooter/>
        </div>
    </BrowserRouter>
    
  )
}
