import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'
import './styles/color.scss'
import './styles/Font.css'
import Login from './pages/Login/Login'
import KakaoRedirect from './pages/atoms/KakaoRedirect'
import Nickname from './pages/Nickname/Nickname'
import Create from './pages/Create/Create'
import CreateLetter from './pages/CreateLetter/CreateLetter'
import MyPage from './pages/MyPage/MyPage'

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
          <Route
            path="/create"
            element={<Create />}
          />
          <Route
            path="/create-letter"
            element={<CreateLetter />}
          />
          <Route
            path="/mypage"
            element={<MyPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
