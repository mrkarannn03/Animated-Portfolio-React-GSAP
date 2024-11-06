import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import 'remixicon/fonts/remixicon.css'

const header = () => {

  useGSAP(function(){
    gsap.to('button', {
      scale: 1.09,
      duration:0.6,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })
  })

  return (
    <div className="fixed flex items-center justify-end w-full z-10 py-20 px-9">
       <button className='bg-black border-4 rounded-full shadow-lg shadow-slate-950 px-9 py-2 hover:bg-gray-300'>Hire Me</button>
       <i className="ri-menu-line text-4xl ml-4 text-gray-600"></i>
    </div>
  )
}

export default header
