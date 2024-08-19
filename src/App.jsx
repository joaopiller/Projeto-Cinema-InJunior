import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home/index.jsx'
import {Footer} from './components/Footer/index.jsx'
import {Header} from './components/Header/index.jsx'
import { FaleConosco } from './pages/Fale-Conosco'
export default function App() {
  return (
        <BrowserRouter>
          <Header/>
          <div className="container">
          
            <Routes>
              <Route path='/' element={<Home/>}/> 
              <Route path='/fale-conosco' element={<FaleConosco/>} />
              
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
  )
}