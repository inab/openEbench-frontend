# OpenEBench Web application

This is the web application for openebench

## Auto Deployment

The Deployment is set up with Docker and GIT workflows.

`docker-image-dev.yml`, `docker-image-dev2.yml`, `docker-image-prod.yml` contain the GIT workflow specifications, using `DOCKER_HUB_USER_NAME` and `DOCKER_HUB_ACCESS_TOKEN` as Docker Hub credentials.

`Dockerfile.develop`, `Dockerfile.develop2` and `Dockerfile.production` contain the ENV variables and Build stage (nginx).

### Production/Master

```yml
name: Docker Image CI production

on:
  push:
    branches: [ master ]
```

The git workflow for building and pushing the Docker Image for <https://legacy.dev-openebench.bsc.es/> and <https://legacy.openebench.bsc.es/> is triggered by a push to the `master` or `development` branch.

### Development

```yml
name: Docker Image CI Dev

on:
  push:
    branches: [ development ]
```

The git workflow for building and pushing the Docker Image for <https://legacy.dev2-openebench.bsc.es/> is triggered by a push to the `development-2` branch.

### Development-2

```yml
name: Docker Image CI Dev 2

on:
  push:
    branches: [ development-2 ]
```

The git workflow for building and pushing the Docker Image for
<https://legacy.dev2-openebench.bsc.es/> is triggered by a push to the `development-2`
branch.

### Docker compose

The respective docker compose files for the oeb landscape can be found in this repo:
 <https://github.com/inab/oeb-docker-compose>

#### Stack

- Angular 8.0+
- 3rd party Javascript libraries (c3 & D3)

#### Useage

Publicly available at [https://openebench.bsc.es](https://openebench.bsc.es)
