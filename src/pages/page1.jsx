import React from 'react'
// import TiltText from '../components/tilttext.jsx'
import Pg1Btm from '../components/pg1btm.jsx'
import BtmIcons from '../components/btmicons1.jsx'

const page1 = () => {

  // const tiltRef = useRef(null);

  const mousemoving = (e) => {
    // console.log(tiltRef.current.get);
  }

  return (
        <div onMouseMove={(e) => {
          mousemoving(e);
        }} className="h-screen p-5 bg-[#fafafa] ">
            <div id='page1-in' className="h-full relative w-full bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1861,h_881,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] shadow-sm shadow-slate-950 bg-cover rounded-[35px] px-20 py-12">
                <img src='https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png' alt='home' className='h-20 '></img>
                
                <div id='tiltdiv' className='tracking-4 mt-36'>
                  <h1 className='text-6xl font-[fnt5]'>I AM<span className='text-black'> DARK MODE</span>™</h1>
                  <h1 className='text-9xl leading-[7vw] font-[fnt5]'>DESIGNER</h1>
                  <h1 className='text-7xl font-[fnt5]'>TO HIRE</h1>
                </div>

                <BtmIcons />
                <Pg1Btm />
            </div>
        </div>
  )
}

export default page1
