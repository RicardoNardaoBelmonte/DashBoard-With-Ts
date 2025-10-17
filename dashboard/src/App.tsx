import './App.css'
import Header from './Components/Header'
import SideNav from './Components/SideNav'
import { DataContextProvider } from './Context/dataContext'
import Resumo from './Pages/Resumo'

function App() {

  return (
    <DataContextProvider>
      <div>
        <SideNav/>
        <main>
          <Header/>
          <Resumo/>
        </main>
      </div>
    </DataContextProvider>
  )
}

export default App
