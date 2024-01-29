import React from 'react'
import f1rtuna from "../assets/logo-png.png"
import f1rtuna2 from "../assets/logo2.png"

export default function Footer() {
  return (
    <div className='relative bg-zinc-900 w-full h-[8vh] text-white font-oswald p-2 flex items-center justify-center'>
        <div className="w-[5%] h-full">
            <img src={f1rtuna2} className="w-full h-full"alt="" />
        </div>
        <div className="p-5">A F1rtuna original, Copyright &copy;2024, designed by <span>Kil-Hwan Pyun</span></div>
    </div>
  )
}
