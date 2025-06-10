import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './components/MainLayout.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop.tsx'
import Home from './pages/Home.tsx'
import Project from './pages/Project.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>}></Route>
          <Route path="/project/:id" element={<Project/>}></Route>
        </Route> 
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
