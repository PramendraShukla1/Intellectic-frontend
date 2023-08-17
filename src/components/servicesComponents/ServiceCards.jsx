import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import perso from "../../assets/Perso.png";
import website from "../../assets/website.png"
import resume from "../../assets/resume.png"
import dataEntry from "../../assets/dataentry.png"
import seo from "../../assets/seo.png"
import ui from "../../assets/ui.png"
import { useNavigate } from "react-router-dom";

const ServiceCards = () => {
  const navigate = useNavigate()
  const serviceList = [
    {
      name: "Personalized Websites",
      desc: "Your digital story, uniquely told. Our team specializes in tailoring websites to match your individuality. From design to functionality, we create a digital space that reflects you.",
      img: `${perso}`,
      url:"/intellectic-services/personalized-websites"
    },
    {
      name: "Web Development and Design",
      desc: "Crafting captivating websites that blend creativity and technical excellence. From stunning visuals to flawless functionality, we design online platforms that resonate with your brand. Let us transform your vision into a remarkable digital reality.",
      img: `${website}`,
      url:"/intellectic-services/web-development-and-designs"
    },
    {
      name: "Resume Building",
      desc:"Crafting Impactful Resumes: Our expert team specializes in creating tailored resumes that showcase your skills, experience, and achievements. With meticulous attention to detail, we design resumes that stand out to potential employers.",
      img:`${resume}`,
      url:"/intellectic-services/resume-building"
    },
    {
      name: "Data Entry",
      desc:"Efficient Data Entry Solutions: Our team offers accurate and timely data entry services to streamline your business operations. With a keen eye for detail, we handle data input, validation, and organization, ensuring data integrity and reliability.",
      img:`${dataEntry}`,
      url:"/intellectic-services/data-entry"
    },
    {
      name: "SEO Optimization",
      desc:"Boost Online Visibility: Our SEO optimization maximizes your website reach. Through strategic techniques, we drive organic traffic and enhance search engine rankings. Elevate your digital presence with our expert SEO services.",
      img: `${seo}`,
      url:"/intellectic-services/seo-optimization"
    },
    {
      name: "UI/UX Design",
      desc:"Our UI/UX design team creates intuitive interfaces that engage and delight users. With a focus on user-centric design principles, we ensure your digital products are not only visually appealing but also easy to navigate. From wireframes to final prototypes.",
      img: `${ui}`,
      url:"/intellectic-services/ui-ux-design"
    },
  ];
  const [service, setService] = useState(serviceList);
  const [searchVal, setSearchVal] = useState("");

  const handleSearchHandler = (e) => {
    e.preventDefault();
    if (searchVal === "") {
      setService(serviceList);
      return;
    }
    const filterBySearch = serviceList.filter((service) => {
      if (service.name.toLowerCase().includes(searchVal.toLowerCase())) {
        return service;
      }
      return null; // or you can remove this line since it's implicit
    });
    setService(filterBySearch);
  };
  
  return (
    <div className="flex justify-center">
    <div class="bg-gray-100 w-full h-auto">
      <div class="container mx-auto rounded-lg p-14">
        <form>
          <h1 class="text-center text-black font-bold text-4xl">
          Explore the Services Tailored for Your Needs.
          </h1>
          <p class="mx-auto font-normal text-sm my-6 max-w-lg text-center">
          Discover a Catalog of Offerings Crafted to Fulfill Your Requirements.
          </p>
          <div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-2 justify-between">
            <input
              class="text-base text-gray-400 flex-grow outline-none px-2 mb-3 w-full"
              type="text"
              placeholder="Search here"
              onChange={(e) => setSearchVal(e.target.value)}
            />
            <div class="ms:flex items-center px-2 flex justify-center rounded-lg space-x-4 mx-auto">
              <button
                class="bg-purple-800 text-white font-bold text-base rounded-lg px-4 py-2"
                onClick={handleSearchHandler}
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
  
      {/* Cards Section */}
      <div className="mt-8 grid ml-3 justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
        {service.map((jobs) => (
          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={jobs.img} alt={jobs.name} />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {jobs.name}
              </Typography>
              <Typography>{jobs.desc}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
            <span
                   
                    class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group hover:cursor-pointer"
                    onClick={()=>navigate(jobs.url)}
                    
                  >
                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                      <svg
                        class="w-5 h-5 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                      <svg
                        class="w-5 h-5 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                      Read More
                    </span>
                  </span>
            </CardFooter>
          </Card>
        ))}
        <div className="mb-3"></div>
      </div>
    </div>
    <div className="mb-6"></div>
  </div>
  );
};

export default ServiceCards;
