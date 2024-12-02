import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './mainRouter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  
      <MainRouter />
    </BrowserRouter>
  </StrictMode>,
)
