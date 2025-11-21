import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Home/Hero'
import { Link } from 'react-router-dom'
import ServicesSection from '../Components/Home/Service_home'
import FinancialCalculators from '../Components/Home/FinancialCalc'
import TrackRecord from '../Components/Home/TrackRecord'
import ContactCTA from '../Components/Home/Contact'
import Footer from '../Components/Home/Footer'
function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <FinancialCalculators />
      <TrackRecord />
      <ContactCTA />
      <Footer />
    </>
  )
}

export default Home





