import React from 'react'

export default function CharacterCard({id, name, status, image, origin}) {
  return (
    <div className='w-full h-full relative border-4 border-zinc-300 rounded-lg shadow-xl text-[.9rem] flex flex-col justify-center items-center p-1 gap-1 cursor-pointer transition-transform duration-300 transform hover:scale-105'>
        <img src={image} alt="" className='w-[100%] h-[72%] bg-center rounded-md'/>
        <div className="w-[100%] h-[28%] bg-zinc-100 pl-2">
            <div className="">Name: {name}</div>
            <div className="">Origin: {origin}</div>
        </div>
    </div>
  )
}
