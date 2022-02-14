// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

  // export const environment = {
  //   production: false,
  //   url: "http://localhost:4000/"
  // };


    
  // import { DynamicEnvironment } from './dynamic-environment';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { DynamicEnvironment } from './dynamic-environment';

class Environment extends DynamicEnvironment {

  public production: boolean;
  constructor() {
    super();
    this.production = false;
  }
}

export const environment = new Environment();