import * as $RefParser from "@apidevtools/json-schema-ref-parser";

export class RefParserError extends Error {
  code: string;
  message: string;
  source: string;
  path: string;
  
  constructor(message, source) {
    super();
    
    this.code = "ECACHEMISS";
    this.message = message;
    this.source = source;
    this.path = null;
  }
  
  get footprint () {
    return `${this.path}+${this.source}+${this.code}+${this.message}`;
  }  
}

export class RefParser {
  boundResolver: Object;
  cache: Object;
  
  public setParameters(cache: Object) {
    this.cache = Object.assign({}, cache);
    const thiscache = this.cache;
    this.boundResolver = {
      order: 1,
      canRead: true,
      
      read(file) {
        return new Promise(((resolve, reject) => {
          if(file.url in thiscache) {
            resolve(thiscache[file.url]);
          } else {
            console.debug(`Cache miss on "${file.url}"`);
            reject(new RefParserError(`Cache miss on "${file.url}"`, file));
          }
        }));
      }
    };
  }
  
  public async loadResources(urls: string[]) {
    
    const thiscache = this.cache;
    return Promise.all(urls.map(url => {
      if(url in thiscache) {
        return null;
      } else {
        return fetch(url).then(r => r.json());
      }
    })).then(schemas => {
      schemas.forEach(schema => {
        if(schema !== null) {
          thiscache[schema.$id] = schema;
        }
      });
    });
  }
  
  public async resolveSchema(origSchema) {
    return $RefParser.dereference(origSchema, {
      resolve: {
        file: false,
        http: this.boundResolver
      }
    });
  }
}