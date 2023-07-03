import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/pages/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './src/pages/Home'
import About from './src/pages/About'
import Contact from './src/pages/Contact'
import Restaurent from './src/pages/Restaurent'

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/Restaurent/:resId',
        element: <Restaurent />
      },
    ]
  },
  
])
root.render(
  <RouterProvider router={router} />
)


