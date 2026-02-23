import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Home/Hero'
import { Link } from 'react-router-dom'
import ServicesSection from '../Components/Home/Service_home'
import FinancialCalculators from '../Components/Home/FinancialCalc'
import TrackRecord from '../Components/Home/TrackRecord'
import ContactCTA from '../Components/Home/Contact'
import Footer from '../Components/Home/Footer'
import GeeomPhilosophy from '../Components/Home/GeeomPhilosophy'
import { useEffect } from 'react'
function Home() {
  useEffect(() => {
    document.title = "GEEOM Securities | Expert Financial Services & Wealth Management";
  }, []);
  return (
    <>
      <Hero />
      <ServicesSection />
      <GeeomPhilosophy />
      <FinancialCalculators />
      <TrackRecord />
      <ContactCTA />
    </ >
  )
}

export default Home





