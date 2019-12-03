class Web {
    homepage: string;

    constructor(homepage?: string) {
        this.homepage = homepage;
    }
}

class Tool {
    description: string;
    name: string;
    web: Web;
    "@timestamp": string;
    "@id": string;
    "@type": string;
    "@label": string;
    "@version": string;
    "@license": string;
}

class Entity {
    type: string;
    tools: Tool[];
}

export class Tools {
    /**
     * id
     */
    id: string;
    /**
     * entities
     */
    entities: Entity[];
}
