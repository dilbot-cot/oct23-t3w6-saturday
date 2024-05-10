import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={AboutPage} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
