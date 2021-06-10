// https://apollo-angular.com/docs/data/services/#query

import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';

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
