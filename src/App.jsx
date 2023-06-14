import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
function App() {

  return (
    <div>
      
     <Sidenav/>
     <Main/>
     <About/>
     <Skills/>
     <Certifications/>
     <Footer/>
    </div>
  )
}

export default App
