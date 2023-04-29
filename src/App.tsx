import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as Toast from '@radix-ui/react-toast'
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
import Terms from './pages/Terms_of_Service/Terms'

function App() {
  return (
    <div className="App">
      <Toast.Provider>
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
              path="/mypage/:resolutionId"
              element={<MyPage />}
            />
            <Route
              path="/terms"
              element={<Terms />}
            />
          </Routes>
        </BrowserRouter>
        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
    </div>
  )
}

export default App
