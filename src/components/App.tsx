import { BrowserRouter} from 'react-router-dom'
import { SiteHeader } from './01_HeaderComponents/header'
import { SiteFooter } from './02_FooterComponents/Footer'
import { MainContent } from './MainContent'



function getCurrentDimension(){
  return {
      width: window.innerWidth,
      height: window.innerHeight
  }
}


export const App = (): JSX.Element => {
  

  return (
    <BrowserRouter>
        <div className={`
            w-full h-full bg-purple-50

              
        `}>
            <SiteHeader
              getScreen = {getCurrentDimension}
            />
            <MainContent/>
            <SiteFooter/>
        </div>
    </BrowserRouter>
    
  )
}
