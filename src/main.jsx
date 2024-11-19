import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import { NavBar } from './nav.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <NavBar />
    <App />
    <App />
    <App />
  </>,
)
