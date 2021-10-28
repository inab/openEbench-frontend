// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// and if you do `ng build ng build --configuration dev2` then `enviornment.dev2.ts`will be used
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  ES_URL : 'https://dev2-openebench.bsc.es/esapi/filter',
  AUTH_SERVER : 'https://inb.bsc.es/auth',

  TOOL_SEARCH_URL : 'https://dev-openebench.bsc.es/monitor/rest/edam/aggregate',

  TOOL_SERVICE_URL : 'https://dev-openebench.bsc.es/monitor/rest/aggregate',
  TOOL_STATISTICS_URL : 'https://dev-openebench.bsc.es/monitor/rest/statistics',
  METRICS_STATISTICS_URL : 'https://dev-openebench.bsc.es/monitor/rest/metrics/statistics',

  SCIENTIFIC_SERVICE_URL : 'https://dev2-openebench.bsc.es/api/scientific/graphql'
};
