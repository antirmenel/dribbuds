import React from 'react'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const page = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Features />
      <Reviews />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default page
