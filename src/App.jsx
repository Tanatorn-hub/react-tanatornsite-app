// ใช้คีย์ลัด rfce หรือ rfc ก็ไ้ด้
// ไฟล์ app.jsx ในเชิง production จะใช้ในการกำหนด route
import React from 'react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomeUI from './views/HomeUI'
import LoginUI from './views/LoginUI'
import ContactUI from './views/ContactUI'
import AboutUI from './views/AboutUI'



function App() {
  return (
    <>
    <CssBaseline/>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeUI />} />
          <Route path='/login' element={<LoginUI />} />
          <Route path='/contact' element={<ContactUI />} />
          <Route path='/about' element={<AboutUI />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App