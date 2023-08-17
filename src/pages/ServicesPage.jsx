import React from 'react'
import NavbarService from '../components/servicesComponents/NavbarService'
import HeroSection from '../components/servicesComponents/HeroSection'
import ServiceCards from '../components/servicesComponents/ServiceCards'
import Footer from "../components/Footer"


const ServicesPage = () => {
 

  return (
    <div>
        <NavbarService/>
        <HeroSection/>
        <ServiceCards/>
        <Footer/>
    </div>
  )
}

export default ServicesPage