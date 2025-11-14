import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Home/Hero'
import { Link } from 'react-router-dom'
import ServicesSection from '../Components/Home/Service_home'
import FinancialCalculators from '../Components/Home/FinancialCalc'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <FinancialCalculators />
    </>
  )
}

export default Home





