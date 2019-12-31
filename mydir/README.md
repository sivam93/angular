<<<<<<< HEAD
# I2r

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
=======
# i2r
Invoice to release
>>>>>>> 6684443b181ebe0a28191200a6e17bf32c527319

#i2r build qa 
ng build --configuration=qa --base-href=http://i2r-qa.s3-website.ap-south-1.amazonaws.com

#i2r build local-qa-test 
ng build --configuration=qa --base-href=http://127.0.0.1:5500/dist/i2r/

#i2r build production 
ng build --configuration=production --base-href=http://i2r-frontend.s3-website.us-east-2.amazonaws.com