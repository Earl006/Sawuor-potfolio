import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'
function App() {

  return (
    <div>
      
     <Sidenav/>
     <Main/>
     <About/>
    </div>
  )
}

export default App
