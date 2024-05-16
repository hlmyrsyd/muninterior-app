import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import About from './components/About'
import Portfolio from "./components/Portfolio";
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navigation />
      <Header />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App