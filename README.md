Monster Hunter World Armor Builder
============================================

> Set builder for video game Monster Hunter World.  
> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.  
> Data for low and high rank from https://docs.mhw-db.com

## Setup project

1. [Node.js 10+](https://nodejs.org/en/) is required on your system
2. Install dependencies with `npm install` from project root
3. Start local dev server (webpack) with `npm run start`

### Local angular build

Requirements:

* [Docker](https://www.docker.com)
* [ddev](https://ddev.readthedocs.io/en/stable/)

To enable nfs mounts copy `config.nfs.yaml.dist` to `config.nfs.yaml`:

```bash
cp .ddev/config.nfs.yaml.dist .ddev/config.nfs.yaml
```

Start ddev from project root:

```bash
ddev start
```

Stop ddev:

```bash
ddev stop
```

Document Root for ddev server is the `dist` directory from Angular build command.

## Angular

### Tasks

* `npm run start` : Start webpack dev server for http://localhost:4200/
* `npm run build -- --prod` : Build package in production mode to `dist`

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

