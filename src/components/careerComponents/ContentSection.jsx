import React from 'react'
import careerContent from "../../assets/careerContent.png"
import careerContent2 from "../../assets/careerContent2.png"

const ContentSection = () => {
  return (
    <>
   
<div class="container my-24 mx-auto md:px-6">

  <section class="mb-32">
    <div
      class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div class="flex flex-wrap items-center">
        <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <img src={careerContent} alt="Trendy Pants and Shoes"
            class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div class="px-6 py-12 md:px-12">
            <h2 class="mb-4 text-2xl font-bold">
              Intellectic: Where Brilliance Shapes Limitless Career Journeys.
            </h2>
            <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="mr-2 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
              </svg>
              Career Talks
            </p>
            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
            At Intellectic, working takes on a new dimension. It's not just a job; it's an immersive experience that fosters innovation, encourages intellectual exploration, and embraces the extraordinary. Here, your career isn't limited by conventional boundaries – it's a journey of constant learning, collaboration with exceptional minds, and pushing your limits to achieve remarkable feats.
            </p>
            <p class="text-neutral-500 dark:text-neutral-300">
            Imagine a workplace where creativity finds its canvas and brilliance is the norm. Intellectic offers an environment that thrives on diversity, where your unique talents are celebrated, and your growth is paramount. With every project, you're contributing to redefining what's possible, all while being part of a community that values excellence, innovation, and the pursuit of greatness.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-32">
    <div
      class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div class="flex flex-wrap items-center">
        <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <img src={careerContent2} alt="Trendy Pants and Shoes"
            class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div class="px-6 py-12 md:px-12">
            <h2 class="mb-4 text-2xl font-bold">
              Intellectic: A Short Brief Of What We Do.
            </h2>
            <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="mr-2 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
              </svg>
              Industry Talks
            </p>
            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
            Intellectic, based in Noida, India, is a leading software company specializing in tailored solutions for businesses, particularly small enterprises. We create cutting-edge websites, engaging content, personalized resumes, and user-friendly applications. Our expertise extends to data management and analysis. As a registered MSME, we're dedicated to holistic success across sectors.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>

    </>
  )
}

export default ContentSection