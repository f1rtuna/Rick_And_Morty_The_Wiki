import React from 'react'
import { GET_SINGLE_EPISODE } from '../queries/episodes'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

export default function EpisodeInfo() {
    const {id} = useParams()
    const getEpisodeQuery = useQuery(GET_SINGLE_EPISODE, {variables: {id: id}})

    return (
        <div className="mt-[10vh] w-full h-[90vh] bg-red-300">
        {/* Loading */}
        {getEpisodeQuery.loading && (
            <div className='w-full h-full flex justify-center items-center text-[3rem]'>Loading...</div>
        )}

        {/* Error */}
        {getEpisodeQuery.error && (
            <div className='w-full h-full flex justify-center items-center text-[3rem] text-red-500'>Error: Invalid Query</div>
        )}

        {getEpisodeQuery.data && getEpisodeQuery.data.episode.name}

    </div>
    )
}
