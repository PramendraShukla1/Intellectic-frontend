import React from 'react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon,UserGroupIcon,PaperAirplaneIcon,UserIcon } from '@heroicons/react/24/outline'




const features = [
  {
    name: 'Personalized Websites',
    description:
      'Your digital story, uniquely told. Our team specializes in tailoring websites to match your individuality. From design to functionality, we create a digital space that reflects you.',
    icon: UserIcon,
  },
  {
    name: 'Web Development and Design',
    description:
      'Crafting captivating websites that blend creativity and technical excellence. From stunning visuals to flawless functionality, we design online platforms that resonate with your brand. Let us transform your vision into a remarkable digital reality.',
    icon: UserGroupIcon,
  },
  {
    name: 'Resume Building',
    description:
      'Crafting Impactful Resumes: Our expert team specializes in creating tailored resumes that showcase your skills, experience, and achievements. With meticulous attention to detail, we design resumes that stand out to potential employers.',
    icon: PaperAirplaneIcon,
  },
  {
    name: 'Data Entry',
    description:
      'Efficient Data Entry Solutions: Our team offers accurate and timely data entry services to streamline your business operations. With a keen eye for detail, we handle data input, validation, and organization, ensuring data integrity and reliability.',
    icon: FingerPrintIcon,
  },
  {
    name: 'SEO Optimization',
    description:
      'Boost Online Visibility: Our SEO optimization maximizes your website reach. Through strategic techniques, we drive organic traffic and enhance search engine rankings. Elevate your digital presence with our expert SEO services.',
    icon: ArrowPathIcon,
  },
  {
    name: 'UI/UX Design',
    description:
      'Our UI/UX design team creates intuitive interfaces that engage and delight users. With a focus on user-centric design principles, we ensure your digital products are not only visually appealing but also easy to navigate. From wireframes to final prototypes.',
    icon: LockClosedIcon,
  },
]



const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32 ">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Custom solutions for accelerated business growth
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
        Explore Our Services: Discover a range of expertly crafted solutions tailored to your needs. From innovative technology to strategic consulting, our services empower your business for success.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
  )
}

export default Features