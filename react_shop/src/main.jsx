import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouterWrapper from './routes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterWrapper />
  </StrictMode>,
)
