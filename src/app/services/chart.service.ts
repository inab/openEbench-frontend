import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor(private http: HttpClient) {}

  getUptime(): Observable<any> {
    // https://dev-openebench.bsc.es/monitor/rest/homepage/biotools:1000genomes/db/www.internationalgenome.org?date1=1622617603&date2=1623827203
    const tool = {
      registry: 'biotools',
      name: '1000genomes',
      url: 'www.internationalgenome.org',
      type: 'db',  // OR 'web'
    };
    const date = {
      initial: 1622617603,
      final: 1623827203,
    };
    const uptimeUrlQuery = `https://dev-openebench.bsc.es/monitor/rest/homepage/${tool.registry}:${tool.name}/${tool.type}/${tool.url}?date1=${date.initial}&date2=${date.final}`;
    return this.http.get(uptimeUrlQuery);
  }

  getCitations(): Observable<any> {
    // https://dev-openebench.bsc.es/monitor/metrics/biotools:1000genomes/db/www.internationalgenome.org
    const tool = {
      registry: 'biotools',
      name: '1000genomes',
      url: 'www.internationalgenome.org',
      type: 'db',  // OR 'web'
    };
    const citationsUrlQuery = `https://dev-openebench.bsc.es/monitor/metrics/${tool.registry}:${tool.name}/${tool.type}/${tool.url}`;
    return this.http.get(citationsUrlQuery);
  }
}
