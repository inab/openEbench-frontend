import { gql } from 'apollo-angular';

export const getCommunitiesQuery = gql`
  query getCommunities($community_id: String!) {
    getCommunities(communityFilters: { id: $community_id }) {
      name
      acronym
      description
      status
      links {
        uri
        comment
      }
    }
  }
`;
export const getBenchmarkingEventsQuery = gql`
  query getBenchmarkingEvents($community_id: String!) {
    getBenchmarkingEvents(
      benchmarkingEventFilters: { community_id: $community_id }
    ) {
      _id
      dates {
        creation
      }
      name
      url
      challenges {
        _id
        name
        url
      }
    }
  }
`;
export const getDatasetsQuery = gql`
  query getDatasets($community_id: String!) {
    getDatasets(
      datasetFilters: {
        community_id: $community_id
        visibility: "export const"
      }
    ) {
      name
      type
      datalink {
        uri
      }
    }
  }
`;
export const getDatasetsQueryForBenchmarkingDetail = gql`
  query getDatasets($id: String!) {
    getDatasets(datasetFilters: { challenge_id: $id, type: "aggregation" }) {
      datalink {
        inline_data
      }
      _id
    }
  }
`;
export const getToolsQuery = gql`
  query getTools($community_id: String!) {
    getTools(toolFilters: { community_id: $community_id }) {
      _id
      name
      status
      description
      registry_tool_id
    }
  }
`;
export const getChallengeListQuery = gql`
  query getChallenges($benchmarking_event_id: String!) {
    getChallenges(
      challengeFilters: { benchmarking_event_id: $benchmarking_event_id }
    ) {
      _id
      name
      orig_id
      acronym
    }
  }
`;
export const getChallengesQuery = gql`
  query getChallenges($id: String!) {
    getChallenges(challengeFilters: { id: $id }) {
      _id
      name
      acronym
      metrics_categories {
        metrics {
          metrics_id
          tool_id
        }
      }
    }
  }
`;
