import React from 'react'

import * as Toast from '@radix-ui/react-toast'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '@/styles/color.scss'
import '@/styles/font.css'
import Create from '@/pages/Create/Create'
import CreateLetter from '@/pages/CreateLetter/CreateLetter'
import Delete from '@/pages/Delete/Delete'
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login/Login'
import MyPage from '@/pages/MyPage/MyPage'
import Nickname from '@/pages/Nickname/Nickname'
import Terms from '@/pages/Terms_of_Service/Terms'
import KakaoRedirect from '@/pages/atoms/KakaoRedirect'

import './App.scss'

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
              path="/resolutions/:resolutionId"
              element={<MyPage />}
            />
            <Route
              path="/terms"
              element={<Terms />}
            />
            <Route
              path="/delete"
              element={<Delete />}
            />
          </Routes>
        </BrowserRouter>
        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
    </div>
  )
}

export default App
