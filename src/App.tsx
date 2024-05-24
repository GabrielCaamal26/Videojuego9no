import './App.css'
import Header from '../src/components/layouts/header'
import Populares from './components/layouts/populares'
import Novedades from './components/layouts/novedades'
import Ofertas from './components/layouts/ofertas'
import Footer from './components/layouts/footer'
function App() {

  return (
    <>
   <Header />
    <Populares/> 
    <Novedades/>
    <Ofertas/>
    <Footer/>
    </>

  ) 
}

export default App
