import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainContainer from './components/MainContainer'
import WebsiteLayout from './layouts/WebsiteLayout'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout/>}>
          <Route index element={<MainContainer/>}/>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
