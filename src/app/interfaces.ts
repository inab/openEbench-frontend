import { FormControl } from '@angular/forms';

export interface Filter {
  text: any;
  filter: string | FormControl;
  type: any;
  label: any;
}
export interface Metrics {
  id: any;
}
export interface Tool {
  id: any;
  entities: any[];
  metrics: any;
}
export interface NavLink {
  label?: string;
  path?: string;
  href?: string;
}
export interface Statistics {
  tools: any;
  publications: any;
  bioschemas: any;
  opensource: any;
}
export interface CommunityLink {
  uri: string;
  comment: string;
}
export interface Community {
  _id: string;
  name: string;
  acronym: string;
  status_id: string[];
  description: string;
  links: CommunityLink[];
  community_contacts: string[];
  stamp: number;
  _schema: string;
}
