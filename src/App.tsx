import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'
import './styles/color.scss'
import './styles/Font.css'
import Login from './pages/Login/Login'
import KakaoRedirect from './pages/atoms/KakaoRedirect'
import Nickname from './pages/Nickname'

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
            path="/callback/kakaotalk"
            element={<KakaoRedirect />}
          />
          <Route
            path="/nickname"
            element={<Nickname />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
