import React from 'react'
import { useNavigate } from 'react-router-dom'
import searchBackground from '../assets/search_background.png'

export default function EpisodeCard({id, name, air_date, created, }) {
  const navigate = useNavigate()
  return (
    <div className='w-full h-full relative border-4 
                  border-zinc-300 rounded-lg shadow-xl 
                    text-[.9rem] flex flex-col justify-center 
                    items-center p-1 gap-1 cursor-pointer 
                    transition-transform duration-300 
                    transform hover:scale-105'
        onClick={() => {
          navigate(`/episode/${id}`)
        }}
    >
        <img src={searchBackground} alt="" className='w-[100%] h-[72%] relative'/>
        <div alt="" className='absolute top-0 w-[100%] h-[72%] bg-center rounded-md bg-zinc-900/70 text-[1.2rem] flex justify-center items-center text-white'> {name} </div>
        <div className="relative w-[100%] h-[28%] bg-zinc-100 pl-2">
            <div className="">Air Date: {air_date}</div>
            <div className="">Created: {created}</div>
        </div>
    </div>
  )
}
