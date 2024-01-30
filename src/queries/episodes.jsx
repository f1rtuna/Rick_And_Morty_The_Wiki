import { gql } from '@apollo/client';

export const GET_EPISODES = gql`
query Episodes($name: String, $page: Int){
    episodes ( page: $page, filter: {name: $name}){
      info {
        count
        pages
        next
        prev
      },
      results {
        id
        name
        air_date
        created
        characters {
            id
            name
            image
        }
      },
    },
  }
`;

export const GET_SINGLE_EPISODE= gql`
query Episode($id: ID!){
    episode (id: $id) {
        id
        name
        air_date
        episode
        created
        characters {
            id
            name
            image
        }
    },
}
`;