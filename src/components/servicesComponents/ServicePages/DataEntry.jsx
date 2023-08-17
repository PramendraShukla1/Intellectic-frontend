import React from 'react'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../../../assets/logo.png"
import webdev from "../../../assets/dataentry.png"

const DataEntry = () => {

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/intellectic-services' },
        { name: 'About Us', href: '/intellectic-about-us' },
        { name: 'Career', href: '/intellectic-career' },
        {name: 'Business News', href: '/intellectic-Business-news-live'},
        {name: 'Resume Builder', href: '/intellectic-resume-builder'},
      ]
      
      
        const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
       


  return (
    <div className="bg-white bg-center ">
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-6 h-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Intellectic - we design future</span>
            <img
              className="h-10 w-35"
              src={logo}
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
       
     
   
      
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between h-6">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Intellectic - we design future</span>
              <img
                className="h-10 w-35"
                src={logo}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
              
      
   
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>

    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      {/* Cards starts here */}
      <>
  {/* component */}
  <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
   
    <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
      <img
        className="w-full"
        alt="image of web developemnt"
        src={webdev}
      />
     
    </div>
    <div className="md:hidden">
      <img
        className="w-full"
        alt="image of web developemnt"
        src={webdev}
      />
      
    </div>
    <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
      <div className="border-b border-gray-200 pb-6">
        <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">
          Services from Intellectic
        </p>
        <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
        Data Entry
        </h1>
      </div>
      <div className="py-4 border-b border-gray-200 flex items-center justify-between">
        <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
          Service Type
        </p>
        <div className="flex items-center justify-center">
          <p className="text-sm leading-none text-gray-600 dark:text-gray-300">
           Data Entry
          </p>
         
          
        </div>
      </div>
      <div className="py-4 border-b border-gray-200 flex items-center justify-between">
       
      </div>
      <a className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none" href='https://docs.google.com/forms/d/e/1FAIpQLScMjyW0gGNcfa4eHmzuWyBEO0DBeY7IEkITz6KMlAQxX3Yb7w/viewform?usp=sf_link' target='_blank'>
        <svg
          className="mr-3 text-white dark:text-gray-900"
          width={16}
          height={17}
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.66699 4.83333V4.84166"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.333 11.5V11.5083"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
       Get Quote
      </a>
      <div>
        <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
        Efficiency and Accuracy Define Our Data Entry Service. We Handle Your Data with Care and Precision, Ensuring Every Detail is Captured and Organized. From Manual Entry to Digital Transformation, We Streamline Your Data for Optimal Usability. Our Expert Team Delivers Swift and Accurate Data Entry, Freeing You to Focus on Core Tasks. Whether It's Data Migration, Data Cleaning, or Digitization, We're Committed to Delivering Reliable Results. Let Us Be Your Data Management Partner, Turning Raw Information into Actionable Insights. Experience Seamlessness and Quality in Every Data Entry Project.
        </p>
        <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">
         Service Code: xlrxfkQ28ni3357
        </p>
        <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
        Delivery: Depends upon your need.
        </p>
        <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
         Discuss With our Customer Executives now!
        </p>
       
      </div>
      <div>
       </div>
      <div>
        <div className="border-b py-4 border-gray-200">
          <div
            data-menu=""
            className="flex justify-between items-center cursor-pointer"
          >
           
            <button
              className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
              role="button"
              aria-label="show or hide"
            >
             
            </button>
          </div>
          <div
            className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300"
            id="sect"
          >
            If you have any questions on how to return your item to us, contact
            us.
          </div>
        </div>
      </div>
    </div>
  </div>
</>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  </div>
  )
}

export default DataEntry