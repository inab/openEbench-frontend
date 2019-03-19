// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  ES_URL : 'https://dev-openebench.bsc.es/esapi/filter',
  AUTH_SERVER : 'https://inb.bsc.es/auth',
  TOOL_SEARCH_URL : 'https://dev-openebench.bsc.es/monitor/rest/edam/aggregate',
  TOOL_SERVICE_URL : 'https://dev-openebench.bsc.es/monitor/rest/aggregate',
  TOOL_STATISTICS_URL : 'https://dev-openebench.bsc.es/monitor/rest/statistics',
  METRICS_STATISTICS_URL : 'https://dev-openebench.bsc.es/monitor/rest/metrics/statistics'
};
