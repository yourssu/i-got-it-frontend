import React from 'react'

import { CookiesProvider } from 'react-cookie'
import ReactDOM from 'react-dom/client'
import ReactGA from 'react-ga'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import App from './App'

import './index.css'

const queryClient = new QueryClient()

const gaTrackingId = import.meta.env.VITE_APP_GA_TRACKING_ID
ReactGA.initialize(gaTrackingId, { debug: true })

const setScreenSize = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

window.addEventListener('resize', () => setScreenSize())

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <CookiesProvider>
        <Router>
          <App />
        </Router>
      </CookiesProvider>
    </RecoilRoot>
    <ReactQueryDevtools />
  </QueryClientProvider>
)
