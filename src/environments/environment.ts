// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAlak1M86TXWOeI0Wlfv5IOD2xUcukXgsw',
    authDomain: 'progge-ab.firebaseapp.com',
    databaseURL: 'https://progge-ab.firebaseio.com',
    projectId: 'progge-ab',
    storageBucket: 'progge-ab.appspot.com',
    messagingSenderId: '1013250598786'
  },
  googleMapsApiKey: 'AIzaSyAlak1M86TXWOeI0Wlfv5IOD2xUcukXgsw'
};
