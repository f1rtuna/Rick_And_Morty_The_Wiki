import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CharacterCard({id, name, image, origin}) {
  const navigate = useNavigate()
  return (
    <div className='w-full h-full relative border-4 border-zinc-300 
                    rounded-lg shadow-xl text-[.9rem] flex flex-col justify-center 
                    items-center p-1 gap-1 cursor-pointer transition-transform duration-300 
                    transform hover:scale-105'
          onClick={() => {
            navigate(`/character/${id}`)
          }}
    >
        <img src={image} alt="" className='w-[100%] h-[72%] bg-center rounded-md'/>
        <div className="w-[100%] h-[28%] bg-zinc-100 pl-2">
            <div className="">Name: {name}</div>
            <div className="">Origin: {origin}</div>
        </div>
    </div>
  )
}
