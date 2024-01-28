import { useState } from 'react'
import Navbar from './components/Navbar'
import slime_background from './assets/slime_background.mp4'
import RickAndMorty100Years from './assets/rick_and_morty_100.jpg'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <video autoPlay loop muted className="relative w-full h-[82vh] object-cover mt-[10vh]">
        <source src={slime_background} type="video/mp4" />
      </video>
      <div className="absolute top-[10vh] w-full h-[82vh] font-oswald text-white text-[1.8rem] p-5 bg-slate-900/55">
        <div className="text-[1.9rem] w-full h-[35%] flex p-5 gap-10 bg-slate-950/75">
          <div className="w-[20%] h-full border-4 border-white">
            <img src={RickAndMorty100Years} className="w-full h-full shadow-lg" alt="" />
          </div>
          <div className="w-[80%] h-full p-2">
            <h1 className='text-slate-100'> Welcome to THE WiKI for Rick and Morty</h1>
            <p className='text-[1.2rem] pl-5 text-slate-200'>- A wiki made by a fan for Fans</p>

            <div className="pt-6 text-[1.6rem]">A Fan of the show? Great here you'll find everything you can find about the episodes, characters, and locations!
            To navigate the wiki simply utilize the navbar options above or our handy search bar below!
            </div>
          </div>
      
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
