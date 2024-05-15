import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import About from './components/About'
import Portfolio from "./components/Portfolio";

function App() {

  return (
    <>
      <Navigation />
      <Header />
      <Portfolio />
      <About />
    </>
  )
}

export default App