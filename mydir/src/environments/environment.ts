// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //apiURL:"http://r2ruat.teamlease.com/R2RBackend/api/",
   apiURL : 'https://r2rdev.teamlease.com/r2rapi/api/',
 // apiURL:"https://y4fo557yaa.execute-api.ap-south-1.amazonaws.com/Prod/api/",
 //localURL:"http://r2ruat.teamlease.com/R2RBackend/api/"
  localURL:"https://r2rdev.teamlease.com/r2rapi/api/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
