
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import PageNotFound from './pages/PageNotFound'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*Absolute Paths */}
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<PageNotFound />} />
          {/* Relative Paths */}
          {/* <Route path='/' element={<HomePage />}>
            {/* <Route path='about' element={<AboutPage />} />
            <Route path='about'>
              <Route path='services' element={<AboutPage />} />
            </Route>
            <Route path='contact' element={<ContactPage />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
