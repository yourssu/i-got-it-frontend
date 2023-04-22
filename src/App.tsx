import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'
import './styles/color.scss'
import './styles/Font.css'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
