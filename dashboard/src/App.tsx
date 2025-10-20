import './App.css'
import Header from './Components/Header'
import SideNav from './Components/SideNav'
import { DataContextProvider } from './Context/dataContext'
import Resumo from './Pages/Resumo'
import Vendas from './Pages/Vendas'

function App() {

  return (
    <DataContextProvider>
      <div className='container'>
        <SideNav/>
        <main>
          <Header/>
          <Resumo/>
          <Vendas/>
        </main>
      </div>
    </DataContextProvider>
  )
}

export default App
