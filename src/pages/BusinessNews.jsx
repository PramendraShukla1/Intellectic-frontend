import React from 'react'
import Navbarnews from '../components/newsComponents/Navbarnews'
import FeatureNews from '../components/newsComponents/FeatureNews'
import NewsCards from '../components/newsComponents/NewsCards'
import Footer from "../components/Footer"

const BusinessNews = () => {
  return (
    <div>
      <Navbarnews/>
      <FeatureNews/>
      <NewsCards/>
      <Footer/>
    </div>
  )
}

export default BusinessNews