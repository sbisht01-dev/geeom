import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import { Link } from 'react-router-dom'
import ServicesSection from '../Components/Service_home'
import FinancialCalculators from './FinancialCalc'

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





