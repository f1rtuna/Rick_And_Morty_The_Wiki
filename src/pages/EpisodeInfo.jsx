import React from 'react'
import { GET_SINGLE_EPISODE } from '../queries/episodes'
import rick_and_morty_bb from "../assets/rick_and_morty_chairs.png"
import labBackground from "../assets/rick_and_morty_lab_background.jpg"
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import CharacterCard from '../components/CharacterCard'

export default function EpisodeInfo() {
    const {id} = useParams()
    const getEpisodeQuery = useQuery(GET_SINGLE_EPISODE, {variables: {id: id}})

    return (
        <>
        <BackButton />
        <div className="mt-[10vh] w-full"
            style = {{
                background: `linear-gradient(to right, rgba(60,60,60,0.7), rgba(60,60,60,0.8)), url(${labBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Loading */}
            {getEpisodeQuery.loading && (
                <div className='w-full h-full flex justify-center items-center text-[3rem] text-white'>Loading...</div>
            )}

            {/* Error */}
            {getEpisodeQuery.error && (
                <div className='w-full h-full flex justify-center items-center text-[3rem] text-red-500'>Error: Invalid Query</div>
            )}
            
            {getEpisodeQuery.data && (
                <div className="flex w-full h-full justify-center items-center font-oswald shadow-lg">
                    <div className="w-[60%] h-full bg-amber-100/95 flex justify-center items-center shadow-md m-5 rounded-xl">
                        {/* card div */}
                        <div className="w-[95%] h-[95%] bg-white/90 p-5 flex flex-col items-center gap-5 shadow-xl rounded-xl m-2">
                            <div className="flex w-full h-[75%] items-center gap-5 shadow-xl">
                                <div className="w-[50%] h-[95%] bg-slate-200/10 rounded-lg shadow-lg p-2">
                                    <img src={rick_and_morty_bb} className="float-left w-full h-full rounded-md" alt="" />
                                </div>
                                <div className="text-[1.8rem] text-zinc-600 w-[50%] h-[95%] bg-slate-200/10 shadow-md flex flex-col items-center p-2 gap-5">
                                    <div className="text-[2.5rem] font-bold">EPISODE INFO</div>
                                    <ul>
                                        <li className='font-bold'>
                                            NAME: {getEpisodeQuery.data.episode.name}
                                        </li>
                                        <li>
                                            AIR DATE: {new Date(getEpisodeQuery.data.episode.air_date).toLocaleDateString()}
                                        </li>
                                        <li>
                                            CREATED: {new Date(getEpisodeQuery.data.episode.created).toLocaleTimeString()}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="w-full flex justify-center items-center text-[2.5rem] text-zinc-500">
                                    Appearing CAST
                                </div>
                                <div className="w-full grid grid-cols-4 gap-2">
                                    {getEpisodeQuery.data.episode.characters.map((character, index) => (
                                        <CharacterCard key={index}
                                            id={character.id}
                                            name={character.name}
                                            origin={character.origin.name}
                                            image={character.image}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        <Footer />
        </>
    )
}
