import { gql } from "@apollo/client";
import IFetchCharacters from "../types/slice/IFetchCharacters";
// , filter: {species: ${species}, gender: ${gender}, status: ${status}}
const CHARACTERS = ({
  page = 1,
  species = "",
  gender = "",
  status = "",
}: IFetchCharacters) => gql`
  {
    characters(page: ${page}, filter: { species: "${species}", gender: "${gender}", status: "${status}" }) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        type
        gender
        image
        created
        location {
          name
          id
        }
        episode {
          name
          id
        }
      }
    }
  }
`;

export default CHARACTERS;
