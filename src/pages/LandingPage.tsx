import React from 'react'
import welcomeImage from '../assets/images/welcome.png'
import Navbar from '../components/Navbar'
import TourSearch from '@/components/TourSearch'

const LandingPage = () => {
  return (
    <div
        className="w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${welcomeImage})` }}
    >
        <Navbar/>
        <div className='grid grid-cols-5 w-full h-[65%] font-[Inter]'>
            <div className='col-span-2'></div>
            <div className='col-span-3 h-full flex items-center just'>
                <div className='flex flex-col gap-6'>
                    <div className='font-bold text-4xl text-[#003233]'>
                        Discover Sustainable Travel<br/>Adventures with EcoTrail
                    </div>
                    <div className='font-normal text-lg text-[#003233]'>
                        Explore eco-friendly destinations and make an impact.<br/>Travel responsibly, leave a positive footprint with EcoTrail!
                    </div>
                    <div className='mt-2'>
                        <button className='bg-[#003233] text-white font-semibold py-4 px-12 rounded-4xl cursor-pointer'>
                            Get Started
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
        <TourSearch/>
    </div>
  )
}

export default LandingPage as React.ComponentType