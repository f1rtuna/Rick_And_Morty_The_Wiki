import React from 'react'
import rick_and_morty_logo from '../assets/rick_and_morty_logo.png'

export default function Navbar() {
  return (
    <div className="absolute top-0 w-full h-[10vh] bg-white text-[2rem] font-oswald text-slate-500">
        <div className="w-full h-full flex">
            <div className="w-[25%] h-full ">
                <img className="w-full h-full" src={rick_and_morty_logo} alt="" />
            </div>
            <div className="w-[40%] h-full flex justify-center items-center text-[2.5rem]">RICK AND MORTY, THE WiKI</div>
            <ul className="w-[35%] h-full flex justify-around items-center text-slate-900">
                <li className=''>Episodes</li>
                <li>Characters</li>
            </ul>
        </div>
    </div>
  )
}
