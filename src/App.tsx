import { Cabecalho } from "./components/cabecalho"
import { Cards } from "./components/cards"

function App() {
  return (
    <>

      <Cabecalho />
      <Cards numero={6}/>
      <Cards numero={7}/>
  </>
  )
}

export default App  