import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'
import './styles/color.scss'
import './styles/Font.css'
import Login from './pages/Login'
import Create from './pages/Create/Create'
import CreateResolution from './pages/CreateResolution/CreateResolution'

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
          <Route
            path="/create"
            element={<Create />}
          />
          <Route
            path="/create-resolution"
            element={<CreateResolution />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
