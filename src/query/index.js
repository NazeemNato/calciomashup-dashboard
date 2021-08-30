import { gql } from "@apollo/client";

export const GET_TEAMS = gql`
  query {
    teams {
      id
      name
    }
  }
`;

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

export const GET_BLACKLISTS = gql`
  query {
    blacklistedClubs {
      team1 {
        name
      }
      team2 {
        name
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

export const CREATE_BLACKLIST = gql`
  mutation ($makeBlacklistMashupT1: String!, $makeBlacklistMashupT2: String!) {
    makeBlacklistMashup(
      t1: $makeBlacklistMashupT1
      t2: $makeBlacklistMashupT2
    ) {
      message
    }
  }
`;

export const UPDATE_TEAM = gql`
  mutation ($updateTeamId: String!, $updateTeamContent: Team) {
    updateTeam(id: $updateTeamId, content: $updateTeamContent) {
      message
    }
  }
`;
