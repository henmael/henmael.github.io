import { HashRouter, Route, Routes } from 'react-router-dom'
import { CalenderDoor } from './pages/CalenderDoor'
import { Calender } from './components/Calender'

function App() {

  return (
    <HashRouter>
      <Routes>
      <Route element={<Calender/>} path='/'/>
        <Route element={<CalenderDoor/>} path='/door/:id'/>
      </Routes>
    </HashRouter>
  )
}

export default App
