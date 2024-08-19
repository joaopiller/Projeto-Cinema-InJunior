import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

//pages 
import Home from './pages/Home/index'
import FaleConosco from './pages/Fale-Conosco'
import Filmes from './pages/Filmes'
import Login from './pages/Login'
import Registrar from './pages/Registrar'
import Sessoes from './pages/Sessoes'

export default function App() {
  return (  
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/faleconosco' element={<FaleConosco/>}></Route>
        <Route path='/filmes' element={<Filmes/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registrar' element={<Registrar/>}></Route>
        <Route path='/sessoes' element={<Sessoes/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}