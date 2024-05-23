import './App.css'
import Header from '../src/components/layouts/header'
import Populares from './components/layouts/populares'
import Novedades from './components/layouts/novedades'
import Ofertas from './components/layouts/ofertas'
function App() {

  return (
    <>
   <Header />
    <Populares/> 
    <Novedades/>
    <Ofertas/>
    </>

  ) 
}

export default App
