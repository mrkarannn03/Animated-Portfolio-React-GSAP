import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const page2 = () => {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from(".rotatetxt", {
      transform: 'rotateX(-80deg)',
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: '.rotatetxt',
        start: 'top 60%',
        end: 'top -300%',
        scrub: 2,
      }
    })
  })

  return (
    <div id='section2' className='bg-[#FAFAFA] text-center p-8 '>
      <h2 className='text-xl text-gray-500 font-[fnt3]'>©  anzo.studio 2024 | designed and developed</h2>

      <div className="rotatetxt">
        <h1 className='text-black text-[42vw] font-[fnt4] uppercase leading-[35vw] mt-20'>Impactful</h1>
      </div>
      <div className='rotatetxt'>
        <h1 className='text-black text-[42vw] font-[fnt4] uppercase leading-[35vw]'>Design</h1>
      </div>
      <div className='rotatetxt'>
        <h1 className='text-black text-[42vw] font-[fnt4] uppercase leading-[35vw]'>Is The</h1>
      </div>
      <div className="rotatetxt">
        <h1 className='text-black text-[42vw] font-[fnt4] uppercase leading-[35vw]'>Design</h1>
      </div>
      <div className='rotatetxt'>
        <h1 className='text-black text-[42vw] font-[fnt4] uppercase leading-[35vw]'>That</h1>
      </div>
      <div className='rotatetxt'>
        <h1 className='text-black text-[42vw] font-[fnt4] uppercase leading-[35vw]'>Works!</h1>
      </div>

    </div>
  )
}

export default page2
