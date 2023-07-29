import { gql } from "@apollo/client";
import IParamsToFetchCharacters from "../types/IParamsToFetchCharacters";

const CHARACTERS = ({
  page = 1,
  species = "",
  gender = "",
  status = "",
  name = "",
}: IParamsToFetchCharacters) => gql`
  {
    characters(page: ${page}, filter: { species: "${species}", gender: "${gender}", status: "${status}", name: "${name}"}) {
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
