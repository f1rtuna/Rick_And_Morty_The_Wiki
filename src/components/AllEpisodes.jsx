import { useState } from 'react';
import { GET_EPISODES } from '../queries/episodes';
import { useQuery } from '@apollo/client';
import EpisodeCard from './EpisodeCard';

import React from 'react'

export default function AllEpisodes({search}) {
    const [page, setPage] = useState(1) // Default to page 1
    const getAllEpisodesQuery = useQuery(GET_EPISODES, {variables: {name: search, page: page}})
    return (
        <div className='w-full h-full bg-zinc-100/20 text-zinc-700'>
            {/* Loading */}
            {getAllEpisodesQuery.loading && (
                <div className='w-full h-full flex justify-center items-center text-[3rem]'>Loading...</div>
            )}

            {/* Error */}
            {getAllEpisodesQuery.error && (
                <div className='w-full h-full flex justify-center items-center text-[3rem] text-red-500'>Error: Invalid Query</div>
            )}

            {/* Data fetched */}
            <div className="w-full h-[88%] grid grid-rows-4 grid-cols-5 gap-4">
                {getAllEpisodesQuery.data && getAllEpisodesQuery.data.episodes.results.map((episode) => (
                    <EpisodeCard key={episode.id} 
                        id={episode.id} 
                        name={episode.name}
                        air_date={episode.air_date}
                        created={episode.created}
                        characters={episode.characters}
                    />
                ))}
            </div>
            {getAllEpisodesQuery.data && getAllEpisodesQuery.data.episodes.info && (
            <div className='w-full h-[8%] bg-zinc-200/20 flex justify-around items-center shadow-lg'>
                {getAllEpisodesQuery.data.episodes.info.prev && (
                <button 
                    className='rounded-lg border-4 p-3 bg-cyan-50 font-bold text-[1.5rem]'
                    onClick={() => setPage(page - 1)}>Previous</button>
                )}
                {getAllEpisodesQuery.data.episodes.info.next && (
                <button 
                    className='rounded-lg border-4 p-3 bg-cyan-50 font-bold text-[1.5rem]'
                    onClick={() => setPage(page + 1)}>Next</button>
                )}
            </div>
            )}
        </div>
    )
}
