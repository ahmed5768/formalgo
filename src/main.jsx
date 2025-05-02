import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Signup } from './sign-up/Sign-up'

import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Signup />
  </StrictMode>,
)
