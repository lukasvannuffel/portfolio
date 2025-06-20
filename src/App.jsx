import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './sections/Hero'
import About from './sections/About'
import Portfolio from './sections/Portfolio'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
    <Navbar />
    <Hero />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
