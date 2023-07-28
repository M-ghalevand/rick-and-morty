import { gql } from "@apollo/client";

const GENERAL_INFO = gql`
  {
    characters {
      info {
        count
        pages
      }
    }
    locations {
      info {
        count
        pages
      }
    }
    episodes {
      info {
        count
        pages
      }
    }
  }
`;

export default GENERAL_INFO;
