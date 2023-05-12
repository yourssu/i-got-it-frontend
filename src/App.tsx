import React from 'react'

import * as Toast from '@radix-ui/react-toast'
import { Routes, Route } from 'react-router-dom'

import '@/styles/color.scss'
import '@/styles/font.css'
import Create from '@/pages/Create/Create'
import CreateLetter from '@/pages/CreateLetter/CreateLetter'
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login/Login'
import MyPage from '@/pages/MyPage/MyPage'
import Nickname from '@/pages/Nickname/Nickname'
import Terms from '@/pages/Terms_of_Service/Terms'
import KakaoRedirect from '@/pages/atoms/KakaoRedirect'

import './App.scss'
import RouteChangeTracker from './RouteChangeTracker'
import Email from './pages/Email/Email'
import Privacy from './pages/Privacy_Policy/Privacy'

function App() {
  RouteChangeTracker()
  return (
    <div className="App">
      <Toast.Provider duration={1500}>
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
            path="/email"
            element={<Email />}
          />
          <Route
            path="/resolutions/:resolutionId"
            element={<MyPage />}
          />
          <Route
            path="/terms"
            element={<Terms />}
          />
          <Route
            path="/privacy-policy"
            element={<Privacy />}
          />
        </Routes>
        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
    </div>
  )
}

export default App
