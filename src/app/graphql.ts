import { gql } from 'apollo-angular';

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
