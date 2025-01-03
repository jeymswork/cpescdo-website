import { useState, useEffect } from 'react'
import NavMain from './Navigation/NavMain'
import Home from './Home/Home'



function App() {

  useEffect(() => {
    document.title = `PESCDO | Tagum City`
  }, [])

  return (
    <div className='w-screen h-auto overflow-x-hidden relative bg-white'>
      <NavMain />
      <div className='h-[calc(100vh-80px)] w-screen'>
        <Home />
      </div>
    </div>
  )
}

export default App
