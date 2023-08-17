import React from 'react'
import NavbarResume from '../components/ResumeBuilderComponents/NavbarResume'
import Footer from "../components/Footer"
import FAQ from '../components/ResumeBuilderComponents/FAQ'


const ResumeBuilder = () => {
  return (
    <div>
        <NavbarResume/>
        <FAQ/>
        <Footer/>
    </div>
  )
}

export default ResumeBuilder