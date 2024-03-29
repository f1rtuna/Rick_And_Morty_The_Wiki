import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import searchBackground from './assets/search_background.png'
import { FcSearch } from "react-icons/fc";
import Footer from './components/Footer'
import './App.css'
import AllCharacters from './components/AllCharacters';
import AllEpisodes from './components/AllEpisodes';

function App() {
  const [page, setPage] = useState(1) // Default to page 1
  const [search, setSearch] = useState('')
  const [searchFilter, setSearchFilter] = useState("characters") // Default to "characters"

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSelectChange = (e) => {
    setSearchFilter(e.target.value)
    setPage(1)
  }

  return (
    <>
      <Hero />
      <div className="relative w-full h-[140vh] flex justify-center items-center"
        style = {{ 
                    background: `linear-gradient(to right, rgba(250,250,245,0.1), rgba(250,250,235,0.5)), url(${searchBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                   }}
      >
        <div className="w-[90%] h-full p-5 bg-gray-50/85 font-oswald rounded-lg flex flex-col gap-5">
          {/* Search Section */}
          <div className="w-full h-[8%] bg-cyan-950/20 rounded-3xl flex items-center justify-center gap-2">
            <select 
              className='w-[9%] h-[50%] bg-cyan-950 text-white rounded-xl flex justify-center items-center p-2 cursor-pointer text-[1.3rem]'
              value = {searchFilter}
              onChange={handleSelectChange}>
              <option value="characters">Characters</option>
              <option value="episodes">Episodes</option>
            </select>
            <div className="w-[80%] h-[50%] flex justify-center items-center gap-2">
              <input
                className='w-[90%] h-full rounded-lg p-2 text-[1.5rem]'
                type="text"
                name="search"                
                placeholder="Search for your favorite episodes or characters"
                value = {search}
                onChange={handleSearchChange}
              />
              <FcSearch className='w-[10%] h-full bg-cyan-950/95 rounded-lg cursor-pointer' onClick={() => {
                setSearch(search)
                setPage(1)
              }}/>
            </div>
          </div>
                   
          {/* Title based on search */}
          
          <div className='w-full h-[5%] flex justify-center items-center text-[2.5rem] font-bold bg-white/85 text-zinc-600 shadow-md'>
            {searchFilter === "characters" && <div>CHARACTERS</div>}
            {searchFilter === "episodes" && <div>EPISODES</div>}
          </div>
          

          {/* Filter Cards based on search */}
          <div className='h-[87%] w-full'>
            {/* characters */}
            {searchFilter === "characters" && (
              <AllCharacters 
                search={search}
                page={page}
                setPage={setPage}
              />
            )}
            {/* episodes */}
            {searchFilter === "episodes" && (
              <AllEpisodes 
                search={search}
                page={page}
                setPage={setPage}
              />
            )}
          </div>

        </div>
          
          
      </div>
      <Footer />
    </>
  )
}

export default App
