import Link from 'next/link'
import React from 'react'

function Herosec() {
  return (
    <div className=''>
        <div>
            <h1>Master The Art Od Music</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit maxime repellat iure at quidem nulla corporis, quia tempora quod et nemo aspernatur eligendi eos pariatur dicta officiis repudiandae rem!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora voluptatum in saepe, amet provident officiis praesentium eius dolores tenetur quisquam maxime ipsum culpa ex magnam veritatis ea blanditiis itaque fugiat.
            </p>
            <div>
                <Link href={"/courses"}>
                Explore courses
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Herosec