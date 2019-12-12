# ShopFrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.
In this Project I have worked with angular as javascript framework for front-end, For styles I worked </b>
with Angular/Material (*ng add @angular/material --save* to install in project),also I worked with jwt </br>
for securing the Authentication (*npm install @auth0/angular-jwt --save * to install).
All work in the project is done in the App Directory.
##### This directory(App) is composed of directories :</br>
* #### Core #### 
  * ##### Base 
  * ##### Domain
  * ##### Repositories
  * ##### Usecases
  * ##### Utils
  * ##### core.module.ts
* Data 
   * ##### Entities 
   * ##### Repositories 
     * ###### mock-repositories
     * ###### web-repositories  
   * ##### repositories-mappers 
   * ##### data.module.ts  
* Presentation
  * ##### layout 
  * ##### login 
  * ##### register
  * ##### nearby-shops
  * ##### preferred-shops
  * ##### shop-item
  * ##### angular-material.module.ts
  * ##### presentation.module.ts
###### The Main Component created by default
## description of all directory Content :
 **Core:** contains all shared inforamtion between Prenstation Layer and Data Layer, also in this directory<br>
             all abstract contents like repositories for example.</br>
   **Base :** contains the abstract usecase used to generalize the execution of all usecases, and abstract mapper </br>
   methods used to convert from Core domain to data entities.</br>
   **Domain:** this directory contains all data object used by Presentation layer </br>
   **Repositories:** contains all abstract methods of user and shop repositories</br>
   **Usecases:** in this we implement all usecases .</br>
   **Utils** declare all utils methods like jwtInterceptor and authentication.</br>
   **core.module.ts** declare all modules used in this layer</br>
 ##### Data contains all data manipulating
   **Entities:** this directory contains all data object used by Data Repositories to connect to rest APi</br>
   **Repositories:** implement the core layer .</br>
      **mock-repositories:** used to test repositories methods with local data.</br>
      **web-repositories:** contains all methods used to connect with rest API.</br>
   **repositories-mappers:** implement the Core mapper to convert from core domain object to Data entities,and </br>
   from Data entities to core domain object.</br>
   **data.module.ts:** declare all modules used in data layer</br>
 **Presentation** in this directory, I declare all the components of our application</br>
   **angular-material.module.ts** declare all angular/Material modules</br>
   **presentation.module.ts** declare all modules used in this layer Other than angular/material modules.</br>

####some useful commands used to work with this project .
after cloning this, you should run the command **npm install** to install all modules used in this project.</br>
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
