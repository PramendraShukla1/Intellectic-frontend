import React from 'react'
import Navbar from '../components/careerComponents/Navbar'
import HeaderCareer from '../components/careerComponents/HeaderCareer'
import ContentSection from '../components/careerComponents/ContentSection'
import Jobs from '../components/careerComponents/Jobs'
import Footer from "../components/Footer"
const CareerPage = () => {
  return (
    <div>
        <Navbar/>
        <HeaderCareer/>
        <ContentSection/>
        <Jobs/>
        <Footer/>
    </div>
  )
}

export default CareerPage