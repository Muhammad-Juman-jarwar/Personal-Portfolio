import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import {
  Home,
  About,
  Contact,
  Gaming,
  // BlogPage,
  // ProjectPage,
  ErrorPage,
  Tutorial,
} from './pages'

// components
import { Sidebar, ThemeTemplate } from './components'

import './utils/templateColors.scss'
import Whatsapp from './components/whatsapp/Whatsapp'
import ProjectPage1 from './pages/projectpage/ProjectPage1'

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <ThemeTemplate />
      <Whatsapp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gaming" element={<Gaming />} />
        {/* <Route path="/blog" element={<BlogPage />} /> */}
        <Route path="/project" element={<ProjectPage1 />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
