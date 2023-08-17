import React from "react";
import image from "../../assets/aboutUsPage.png";
import image2 from "../../assets/aboutUsPage2.png";

const MainAbout = () => {
  return (
    <>
      
      <div className="container my-24 mx-auto md:px-6">
       
        <section className="mb-32 text-center lg:text-left">
          <div className="py-12 md:px-6 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="flex grid items-center lg:grid-cols-2">
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                  <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                    <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
                      Intellectic - We Design Future
                    </h2>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                      Located in Noida, Uttar Pradesh, India, Intellectic is a
                      prominent software development company. We specialize in
                      creating innovative software solutions for various
                      industries, focusing on empowering small enterprises with
                      cutting-edge websites to enhance their online presence and
                      stimulate growth.
                    </p>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                      Beyond software expertise, our services encompass a wide
                      range of offerings. We provide personalized resume
                      crafting, effectively showcasing your skills. Our skilled
                      content writers create engaging narratives to captivate
                      your target audience.
                    </p>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                      For your digital identity, our team excels in designing
                      personalized websites that authentically represent your
                      brand. We also develop user-friendly applications across
                      platforms, translating your concepts into functional apps.
                      We are also proficient in Excel-based data entry, ensuring
                      precise data management through automation and insightful
                      analysis.
                    </p>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    At Intellectic, we go beyond software, crafting holistic solutions that drive success across diverse sectors. We are now registered under MSME, further enhancing our commitment to excellence.
                    </p>
                    
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                  <img
                    src={image}
                    className="lg:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="mb-32 text-center lg:text-left">
          <div className="py-12 md:px-6 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="flex grid items-center lg:grid-cols-2">
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                  <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                    <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
                    New Horizons Unveiled: Our Innovative Pursuits
                    </h2>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    At Intellectic, our commitment to innovation knows no bounds. Our new initiative embarks on a journey of discovery, where we explore groundbreaking avenues that transcend conventional boundaries. With an unwavering focus on the convergence of technology and transformation, we are poised to unveil a series of forward-thinking solutions that address the unique challenges faced by modern enterprises.
                    </p>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    Driven by a spirit of exploration, our teams have been meticulously crafting a suite of offerings that stand at the forefront of industry trends. From harnessing the power of emerging technologies to pioneering new approaches to problem-solving, our latest endeavors are poised to redefine the way businesses thrive in a dynamic landscape.
                    </p>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    With this new horizon, we invite you to embark on a journey with us—a journey that transcends the ordinary and paves the way for extraordinary achievements. Stay tuned as we unveil the details of our innovative pursuits and continue to lead the charge in shaping the future of industries.
                    </p>
                
                    
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                  <img
                    src={image2}
                    className="lg:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
      
    </>
  );
};

export default MainAbout;
