import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
function App() {

  return (
    <div>
      
     <Sidenav/>
     <Main/>
     <About/>
     <Skills/>
    </div>
  )
}

export default App
