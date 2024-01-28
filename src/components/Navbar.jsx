import React from 'react'
import rick_and_morty_logo from '../assets/rick_and_morty_logo.png'

export default function Navbar() {
  return (
    <div className="absolute top-0 w-full h-[10vh] bg-white text-[2rem] font-oswald text-slate-500">
        <div className="w-full h-full flex">
            <div className="w-[20%] h-full ">
                <img className="w-full h-full" src={rick_and_morty_logo} alt="" />
            </div>
            <div className="w-[30%] h-full flex justify-center items-center text-[2.5rem]">RICK AND MORTY, THE WiKI</div>
            <ul className="w-[50%] h-full flex justify-around items-center text-slate-900">
                <li>Episodes</li>
                <li>Characters</li>
                <li>Location</li>
            </ul>
        </div>
    </div>
  )
}
