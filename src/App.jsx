import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
function App() {

  return (
    <div>
      
     <Sidenav/>
     <Main/>
     <About/>
     <Skills/>
     <Certifications/>
    </div>
  )
}

export default App
