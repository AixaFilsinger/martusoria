import './App.css'
import Portada from './views/Portada'
import Frase from './views/Frase'
import ReproductorMusic from './views/ReproductorMusic'
import CuentaR from './views/CuentaR'
import StarBackground from './views/StarBackground'
import Varios from './views/Varios'

function App() {
  
  return (
    <>
    <StarBackground></StarBackground>
     <Portada></Portada>
     <Frase></Frase>
     <section className='fondo'>
      <ReproductorMusic></ReproductorMusic>
      <CuentaR></CuentaR>
      <Varios></Varios>
     </section>
     
    </>
  )
}

export default App
