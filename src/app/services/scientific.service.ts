// https://apollo-angular.com/docs/data/services/#query

import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';

export interface Community {
  _id: string;
  name: string;
  acronym: string;
  status_id: [string];
  description: string;
  links: [any];
  community_contacts: [string];
  stamp: number;
  _schema: string;
}

export interface Response {
  getCommunities: Community[];
}

@Injectable({
  providedIn: 'root',
})
export class GetComunitiesGQL extends Query<Response> {
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
