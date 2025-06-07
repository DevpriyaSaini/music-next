"use client"
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link';


export const projects = [
{
    title: "Juilliard School",
    description:
      "The world's premier performing arts conservatory, offering dance, drama, and music education at the highest level.",
    link: "https://www.juilliard.edu",
  },
  {
    title: "Berklee College of Music",
    description:
      "The leading institute of contemporary music and the performing arts, offering innovative degree programs.",
    link: "https://www.berklee.edu",
  },
  {
    title: "Steinway & Sons",
    description:
      "The maker of the world's finest pianos, setting the standard in craftsmanship and musical excellence since 1853.",
    link: "https://www.steinway.com",
  },
  {
    title: "Royal Academy of Music",
    description:
      "London's historic conservatoire training exceptional musicians since 1822, with a global reputation for artistic achievement.",
    link: "https://www.ram.ac.uk",
  },
  {
    title: "Yamaha Music",
    description:
      "Global leader in musical instruments and audio equipment, supporting music education worldwide.",
    link: "https://www.yamaha.com",
  },
  {
    title: "Sibelius Academy",
    description:
      "Finland's top music university and one of Europe's most respected institutions for classical and folk music education.",
    link: "https://www.uniarts.fi/en/sibelius-academy",
  },
  {
    title: "Fender Play",
    description:
      "Innovative digital platform making guitar, bass, and ukulele education accessible to players of all levels.",
    link: "https://www.fender.com/play",
  },
  {
    title: "ABRSM",
    description:
      "The Associated Board of the Royal Schools of Music, providing music exams and assessments worldwide since 1889.",
    link: "https://www.abrsm.org",
  },
  {
  title: "Curtis Institute of Music",
  description: 
    "One of the world's most selective music conservatories, offering full-tuition scholarships to all undergraduates and training generations of elite performers since 1924.",
  link: "https://www.curtis.edu",
}
];

function Upcomingweb() {
  return (
     <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>

        <div className="mt-10">
            <HoverEffect items={projects} />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Upcomingweb