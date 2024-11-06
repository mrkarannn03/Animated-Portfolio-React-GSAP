import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const btmicons1 = () => {

  useGSAP(function(){
    gsap.to('#tiles img',{
      rotate: 360,
      duration: 6,
      repeat: -1,
      ease: 'linear',
    })
  })
  
  return (
    <div id='tiles' className='fixed right-20 bottom-16 z-20'>
      <img src='https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png' className='h-[5rem] '></img>
      <img src='https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png' className='h-[5rem] mt-7'></img>
    </div>  
  )
}

export default btmicons1