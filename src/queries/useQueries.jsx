import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS, GET_SINGLE_CHARACTER } from "../queries/characters";
import { GET_EPISODES, GET_SINGLE_EPISODE } from "../queries/episodes";

export default function useQueries(queryName, variables) {
    switch(queryName) {
        case 'GET_CHARACTERS':
            return useQuery(GET_CHARACTERS, {variables: variables})
        case 'GET_SINGLE_CHARACTER':
            return useQuery(GET_SINGLE_CHARACTER, {variables: variables})
        case 'GET_EPISODES':
            return useQuery(GET_EPISODES, {variables: variables})
        case 'GET_SINGLE_EPISODE':
            return useQuery(GET_SINGLE_EPISODE, {variables: variables})
        default:
            throw new Error('Invalid Query')
    }
}
