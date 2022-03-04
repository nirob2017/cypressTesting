// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// All the custom assertion/verfication commands are below

Cypress.Commands.add("checkElementIsVisibleWithClass", (className) => {
  cy.get(`.${className}`).should("be.visible");
});

Cypress.Commands.add("checkElementIsVisibleWithID", (id) => {
  cy.get(`#${id}`).should("be.visible");
});

Cypress.Commands.add("checkInputFieldWithType", (type) => {
  cy.get(`input[type="${type}"]`).should("be.visible");
});

Cypress.Commands.add("checkButtondWithType", (type) => {
  cy.get(`button[type="${type}"]`).should("be.visible");
});

Cypress.Commands.add("checkTextIsVisible", (text) => {
  cy.contains(text).should("exist");
});

Cypress.Commands.add("checkElementIsVisible", (element) => {
  cy.get(element).should("exist");
});

Cypress.Commands.add("checkUrlExtension", (extension) => {
  cy.url().should("include", `${extension}`);
});

// All the custom action commands are below

Cypress.Commands.add("tapElementWithClass", (className, index = 0) => {
  cy.get(`.${className}`).eq(index).click();
});

Cypress.Commands.add("tapElement", (element) => {
  cy.get(element).should("exist").click({ force: true });
});

Cypress.Commands.add("typeInInputField", (type, text, index = 0) => {
  cy.get(`input[type="${type}"]`).eq(index).clear().type(text);
});

Cypress.Commands.add("clickButtonWithType", (type, index = 0) => {
  cy.get(`button[type="${type}"]`).eq(index).should("be.visible").click();
});

Cypress.Commands.add("tapElementWithId", (id) => {
  cy.get(`#${id}`).click();
});

Cypress.Commands.add("typeInInputFieldUsingName", (type, text, index = 0) => {
  cy.get(`input[name="${type}"]`).eq(index).should("be.visible").type(text);
});

Cypress.Commands.add("tapElementWithText", (text) => {
  cy.contains(text).click({ force: true });
});

Cypress.Commands.add(
  "enterTextInInputFieldWithPlaceholder",
  (selector, text, index = 0) => {
    cy.get(`input[placeholder="${selector}"]`).eq(index).should("exist").type(text);
  }
);
