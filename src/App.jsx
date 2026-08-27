import React from 'react'
import Header from './Components/Header/Header'
import './App.css'
import Hero from './Components/Hero/Hero'
import Card from './Components/Card/Card'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Card/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App