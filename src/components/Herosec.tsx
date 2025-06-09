import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

function Herosec() {
  return (
    <div    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 mb-15">
        <Spotlight
         className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
        />
  <div className="p-7 relative z-10 w-full text-center">
    <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
      Master The Art Of Music
    </h1>
    
    <p  className="mt-7 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
      your musical journey today. Whether you're a beginner or
      Dive into our comprehensive music courses and transform
      looking to refine your skills, join us to unlock your true
      potential.
    </p>
    
    <div className="mt-4 text-amber-50 ">
      <Link 
        href="/courses" 
      >
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore courses
      </Button>
      </Link>
    </div>
  </div>
  
</div>
  )
}

export default Herosec