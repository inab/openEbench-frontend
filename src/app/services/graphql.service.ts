// https://apollo-angular.com/docs/data/services/#query

import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';
import { Community } from '../interfaces';

export interface Response {
  getCommunities?: Community[];
  getBenchmarkingEvents?: any;
  getDatasets?: any;
  getTools?: any;
}

@Injectable({
  providedIn: 'root',
})
export class AllComunitiesGQL extends Query<Response> {
  document = gql`
    query getCommunities {
      getCommunities {
        _id
        name
        acronym
        links {
          label
          uri
          comment
        }
      }
    }
  `;
}

@Injectable({
  providedIn: 'root',
})
export class CommunityByIdGQL extends Query<Response> {
  document = gql`
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
}

@Injectable({
  providedIn: 'root',
})
export class EventsOfCommunityGQL extends Query<Response> {
  document = gql`
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
}

@Injectable({
  providedIn: 'root',
})
export class DatasetsOfCommunityGQL extends Query<Response> {
  document = gql`
    query getDatasets($community_id: String!) {
      getDatasets(
        datasetFilters: { community_id: $community_id, visibility: "public" }
      ) {
        name
        type
        datalink {
          uri
        }
      }
    }
  `;
}

@Injectable({
  providedIn: 'root',
})
export class ToolsOfCommunityGQL extends Query<Response> {
  document = gql`
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
}
