import React, {useEffect, useState } from 'react'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className='App'> 
      <Intro/>
      <Portfolio/>
      <Contact/>
      <Footer/>
     
      <h1>Hello World</h1>
    </div>
    </>
  );
}

export default App
