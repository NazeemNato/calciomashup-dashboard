import { gql } from "@apollo/client";

export const GET_REQUESTS = gql`
  query {
    requests {
      id
      team1 {
        name
        image
      }
      team2 {
        name
        image
      }
    }
  }
`;

export const DELETE_REQUEST = gql`
  mutation ($deleteRequestId: String!) {
    deleteRequest(id: $deleteRequestId) {
      message
    }
  }
`;
