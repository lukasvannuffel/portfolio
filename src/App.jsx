import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
