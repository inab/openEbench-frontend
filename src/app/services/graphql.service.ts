// https://apollo-angular.com/docs/data/services/#query

import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';
import { Community } from '../interfaces';

export interface Response {
  getCommunities: Community[];
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
