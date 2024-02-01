import React from 'react'
import { Link } from 'react-router-dom'
import rick_and_morty_logo from '../assets/rick_and_morty_logo.png'

export default function Navbar() {
  return (
    <div className="absolute top-0 w-full h-[10vh] bg-white text-[2rem] font-oswald text-slate-500 px-20">
        <div className="w-full h-full flex">
            <div className="w-[25%] h-full">
                <Link to='/'>
                  <img className="w-full h-full" src={rick_and_morty_logo} alt="" />
                </Link>
            </div>
            <div className="w-[75%] h-full flex justify-end items-center text-[2.5rem] px-20">RICK AND MORTY, THE WiKI</div>
        </div>
    </div>
  )
}
