# Cypress Automation

## Documentation

I've investigated Join, Log in & Add account module of this [app](https://partnerforsqa.dev.uniteliving.com/dtms). Then I point out the functionalities and make a test plan with use cases. You can find the functionalities & test plan [here](https://docs.google.com/spreadsheets/d/1aviNiybemAT2GAZTpNf9pniZX4RTOUmCxt7GAMmk-Uk/edit?usp=sharing).

## Project Structure
I've used a cypress's suggested project structure. In the cypress folder, there are five directories. 

- #### fixtures
All the static data/values needed for automation tests reside here.

 - #### helpers
Here I have put all the helper methods needed for automation testing. Also, I put all reusable, duplicate codes as methods for using them in the tests, this reduced the boilerplate of the codes & improved code scalability.

 - #### integration
All the test cases are here in test suites. For i.e positive test cases in `a_positiveTestsSuite.spec.js`.

 - #### plugins
Cypress plugin configuration is here. I've configured a module for running the tests in the browser's incognito mode.

 - #### support
All the custom commands are in `commands.js`. I've written all the custom commands in `commands.js` for doing assertions & actions in tests.


`cypress.json`: Here I've declared Base URL, page width, command timeout, etc.

## Project Setup

Clone this repo & install dev dependencies using NPM

- ```npm i```: Run this on the terminal.

## Running Tests

- ```npm test```: For running the test using cypress GUI.
- ```npm run cypress:run```: For running the tests headless.

#### Happy Testing!