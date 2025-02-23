import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import VeiwPaste from './components/VeiwPaste'
import Paste from './components/Paste'
import Navbar from './components/Navbar'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    )
  },
  {
    path: '/pastes',
    element: (
      <>
        <Navbar />
        <Paste />
      </>
    )
  },
  {
    path: '/pastes/:id',
    element: (
      <>
        <Navbar />
        <VeiwPaste />
      </>
    )
  }
])

function App() {
  return <div><RouterProvider router={router}
  />
  </div> // ✅ Correctly using the router
}

export default App

