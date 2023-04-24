import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import App from './App'
import './index.css'

const queryClient = new QueryClient()

const setScreenSize = () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty("--vh",`${vh}px`)
}

window.addEventListener('resize', () => setScreenSize())

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App/>
    <ReactQueryDevtools />
  </QueryClientProvider>
)