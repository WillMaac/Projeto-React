import Routes from './routes/Routes'
import { BrowserRouter } from 'react-router-dom'
import Headers from './components/headers/Headers'
import GlobalStyle from './styles/GlobalStyle'
import './App.css'

function App() {

  return (
        <BrowserRouter>
        <Headers/>
        <Routes/>
        <GlobalStyle/>
        </BrowserRouter>
  )
}

export default App
