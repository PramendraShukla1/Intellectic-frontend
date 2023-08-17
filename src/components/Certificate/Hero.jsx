import React from 'react'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className="container mx-auto">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4 ml-2">
      <div>
    <SearchBar/>
    </div>
      </div>
    </div>
    
    </div>
  )
}

export default Hero