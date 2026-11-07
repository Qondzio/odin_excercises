import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import './assets/styles/style.css'
import Game from './Game.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router=createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/game1",
    element:<Game game={1}/>
  },
  {
    path:"/game2",
    element:<Game game={2}/>
  },
  {
    path:"/game3",
    element:<Game game={3}/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
