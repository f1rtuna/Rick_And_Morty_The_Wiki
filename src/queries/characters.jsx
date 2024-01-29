import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
query Characters($name: String, $page: Int){
    characters ( page: $page, filter: {name: $name}){
      info {
        count
        pages
        next
        prev
      },
      results {
        name
        species
        status
        type
        gender
        origin{name}
        location {name}
        image
      },
    },
  }
`;

export const GET_SINGLE_CHARACTER = gql`
query Character($id: ID!){
    character (id: $id) {
        name
        species
        status
        type
        gender
        origin{name}
        location {name}
        image
      },
    },
`;
