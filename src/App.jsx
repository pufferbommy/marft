import React from 'react'
import AboutUs from './components/AboutUs'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Ready from './components/Ready'
import Testimonal from './components/Testimonal'
import TrustedCompany from './components/TrustedCompany'
import Video from './components/Video'
import WhatWeProvide from './components/WhatWeProvide'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <TrustedCompany />
      <AboutUs />
      <Video />
      <WhatWeProvide />
      <Testimonal />
      <Ready />
      <Blogs />
      <Footer />
    </>
  )
}

export default App
