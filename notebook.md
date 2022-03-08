## Video 1
Angular is a framkework that is used to build cliend side applications.
Good for single page applications.
Good for Javascript.

Modular approach, re-usable code (componentes), quick development (routes etc.), from Google team and uses Microsoft's typescript.

2010 - Angular JS
2016 - Angular version 2
2016 - Angular version 4
2017 - Angular version 5

Angular is updated twice a year.

Version 1.2.3
1. Major
2. Minor
3. Fix(patch)

Versions are backwards compatible.

What we learn will not be wasted.

## Video 2
This is a crash course for complete beginners.
It covers all the main concepts in Angular.

Pre-requesites:
Basics of HTML, CSS and JS.
Basics of Typescript.

Environment:
Node
Npm
Angular CLI
VS Code

## Video 3 - Architecture
Modules:

Angular App
Module <-> Module

Import/Export
User<->Admin

Every mode represents a feature area of the application (User module, Admin module).

Every ang app has at least one module: root module: AppModule.

Component - controls the portion of the view of the browser (nav, sidebar, main content -- and one root component: app component).

Each comp has a class and a html template.

Module also has a service: business logic of the app.

Ang app - one or more modules.
mod - one or more components and services.
comp - html and class
services - business logic.
modules interact and render view in the browser.

### Structure
package.json -> packages that are stroes, scripts, etc.
main.ts -> entry point
app folder -> contains root module/component.

ng serve goes to the main.ts file, bootstrap the app module, which bootstrap app componente

Each comp has a class and a html template.

Module also has a service: business logic of the app.

Ang app - one or more modules.
mod - one or more components and services.
comp - html and class
services - business logic.
modules interact and render view in the browser.


ng serve goes to the main.ts file, bootstrap the app module, which bootstrap app componente.



## Video 4
Template		Class		Metadata
View			Code		Information
HTML			TypeScript	Decorator
			Data&Methods
