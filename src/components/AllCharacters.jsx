import useQueries from '../queries/useQueries';
import CharacterCard from './CharacterCard';

import React from 'react'

export default function AllCharacters({search, page, setPage}) {
    const getAllCharactersQuery = useQueries('GET_CHARACTERS', {name: search, page: page})
    
    return (
        <div className='w-full h-[100%] bg-zinc-100/20 text-zinc-700 flex flex-col'>
            {/* Loading */}
            {getAllCharactersQuery.loading && (
                <div className='w-full h-full flex justify-center items-center text-[3rem]'>Loading...</div>
            )}

            {/* Error */}
            {getAllCharactersQuery.error && (
                <div className='w-full h-full flex justify-center items-center text-[3rem] text-red-500'>Error: Invalid Query</div>
            )}

            {/* Data fetched */}
            <div className="w-full h-[88%] grid grid-rows-4 grid-cols-5 gap-4">
                {getAllCharactersQuery.data && getAllCharactersQuery.data.characters.results.map((character) => (
                    <CharacterCard key={character.id} 
                        id={character.id} 
                        name={character.name}
                        image={character.image}
                        origin={character.origin.name}
                    />
                ))}
            </div>
            {getAllCharactersQuery.data && getAllCharactersQuery.data.characters.info && (
            <div className='w-full h-[8%] bg-zinc-200/20 flex justify-around items-center shadow-lg'>
                {getAllCharactersQuery.data.characters.info.prev && (
                <button 
                    className='rounded-lg border-4 p-3 bg-cyan-50 font-bold text-[1.5rem]'
                    onClick={() => setPage(page - 1)}>Previous</button>
                )}
                {getAllCharactersQuery.data.characters.info.next && (
                <button 
                    className='rounded-lg border-4 p-3 bg-cyan-50 font-bold text-[1.5rem]'
                    onClick={() => setPage(page + 1)}>Next</button>
                )}
            </div>
            )}
        </div>
    )
}
