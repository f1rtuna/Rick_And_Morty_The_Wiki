import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_SINGLE_CHARACTER } from '../queries/characters'
import { useParams } from 'react-router-dom'

export default function CharacterInfo() {
    const {id} = useParams()
    const getCharacterQuery = useQuery(GET_SINGLE_CHARACTER, {variables: {id: id}})
    
    return (
        <div className="mt-[10vh] w-full h-[90vh] bg-red-300">
            {/* Loading */}
            {getCharacterQuery.loading && (
                <div className='w-full h-full flex justify-center items-center text-[3rem]'>Loading...</div>
            )}

            {/* Error */}
            {getCharacterQuery.error && (
                <div className='w-full h-full flex justify-center items-center text-[3rem] text-red-500'>Error: Invalid Query</div>
            )}

            {getCharacterQuery.data && getCharacterQuery.data.character.name}

        </div>
    )
}
