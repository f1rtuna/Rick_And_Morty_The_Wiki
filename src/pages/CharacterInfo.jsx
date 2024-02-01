import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_SINGLE_CHARACTER } from '../queries/characters'
import labBackground from "../assets/rick_and_morty_lab_background.jpg"
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';

export default function CharacterInfo() {
    const {id} = useParams()
    const getCharacterQuery = useQuery(GET_SINGLE_CHARACTER, {variables: {id: id}})
    
    return (
        <>
        <BackButton />
        <div className="mt-[10vh] w-full h-[82vh]"
            style = {{
                background: `linear-gradient(to right, rgba(60,60,60,0.7), rgba(60,60,60,0.8)), url(${labBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Loading */}
            {getCharacterQuery.loading && (
                <div className='w-full h-full flex justify-center items-center text-[3rem] text-white'>Loading...</div>
            )}

            {/* Error */}
            {getCharacterQuery.error && (
                <div className='w-full h-full flex justify-center items-center text-[3rem] text-red-500'>Error: Invalid Query</div>
            )}
            
            {getCharacterQuery.data && (
                <div className="flex w-full h-full justify-center items-center font-oswald shadow-lg">
                    <div className="w-[60%] h-[75%] bg-amber-100/95 flex justify-center items-center shadow-md">
                        {/* card div */}
                        <div className="w-[95%] h-[95%] bg-white/90 p-5 flex items-center gap-5 shadow-xl">
                            <div className="w-[50%] h-[85%] bg-slate-200/10 rounded-lg shadow-lg p-2">
                                <img src={getCharacterQuery.data.character.image} className="float-left w-full h-[85%] rounded-md" alt="" />
                                <div className="text-[2.5rem] font-bold w-full h-[15%] flex justify-center text-slate-600">
                                    {getCharacterQuery.data.character.name}
                                </div>
                            </div>
                            <div className="text-[1.8rem] text-zinc-600 w-[50%] h-[85%] bg-slate-200/10 shadow-md flex flex-col items-center p-2 gap-5">
                                <div className="text-[2.5rem] font-bold">CHARACTER INFO</div>
                                <ul>
                                    <li>
                                        GENDER: {getCharacterQuery.data.character.gender}
                                    </li>
                                    <li>
                                        SPECIES: {getCharacterQuery.data.character.species}
                                    </li>
                                    <li>
                                        ORIGIN: {getCharacterQuery.data.character.origin.name}
                                    </li>
                                    <li>
                                        TYPE: {getCharacterQuery.data.character.type ? getCharacterQuery.data.character.type : "N/A"}
                                    </li>
                                    <li>
                                        STATUS: <span className={getCharacterQuery.data.character.status === "Alive" ? "text-green-800" : "text-red-800"}>{getCharacterQuery.data.character.status}</span>
                                    </li>
                                </ul>
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
