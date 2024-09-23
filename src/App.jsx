import React, { useState } from 'react'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className='App'> 
      <Intro/>
      <Portfolio/>
      <Contact/>
      <h1></h1>

    </div>
    </>
  );
}

export default App
