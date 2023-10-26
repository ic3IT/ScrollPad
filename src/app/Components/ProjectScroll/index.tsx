'use client'
import React from 'react'
import GirlLaptop from '../../assets/images/GirlLaptop.png'
import Marquee from 'react-fast-marquee' 
import Image from 'next/image'
import completed from '../../assets/images/no-completed-IDO.png'
import project1 from '../../assets/images/projects/1.png'
import project2 from '../../assets/images/projects/2.png'
import project3 from '../../assets/images/projects/3.png'
import project4 from '../../assets/images/projects/4.png'
import project5 from '../../assets/images/projects/5.png'
import project6 from '../../assets/images/projects/6.png'

function ProjectScroll() {
  return (
    <div>
    <Marquee>
    <div className='flex flex-row'>
        <div className="flex flex-col items-center mb-4 mr-20">
            <Image src={project1} alt="Description" width={120} height={120} />
        </div>
        <div className="flex flex-col items-center mr-20">
            <Image src={project2} alt="Description" width={120} height={120} />
        </div>
        <div className="flex flex-col items-center mr-20">
            <Image src={project3} alt="Description" width={120} height={120} />
        </div>
        <div className="flex flex-col items-center mr-20">
            <Image src={project4} alt="Description" width={120} height={120} />
        </div>
        <div className="flex flex-col items-center mr-20">
            <Image src={project5} alt="Description" width={120} height={120} />
        </div>
        <div className="flex flex-col items-center mr-20">
            <Image src={project6} alt="Description" width={120} height={120} />
        </div>
    </div>
</Marquee>

</div>


  )
}

export default ProjectScroll