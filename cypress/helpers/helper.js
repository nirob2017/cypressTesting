import { accountsPage, joinPage, loginPage } from "../fixtures/constants";

function randomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function generateEmail() {
  const id = randomString(6);
  return `nirob-${id}@gain.io`;
}

export function generateName() {
  const id = randomString(8);
  return `nirob_${id}`;
}

export function generatePass() {
  const id = randomString(8);
  return `${id}`;
}

export function checkAccountInList(name, email) {
  cy.checkTextIsVisible(name);
  cy.checkTextIsVisible(email);
  cy.checkTextIsVisible(accountsPage.phone);
}

export function handleLogin() {
  cy.visit("/");
  cy.tapElementWithId(loginPage.signinDrodownId);
  cy.typeInInputFieldUsingName(joinPage.joinEmailField, loginPage.email);
  cy.typeInInputField(loginPage.password, loginPage.pass);
  cy.clickButtonWithType(loginPage.submitButton);
  cy.checkUrlExtension(joinPage.dtmsExt);
  cy.checkTextIsVisible(loginPage.dashBoard);
}

export function handleInputFieldOfAddAccount(name, email) {
  cy.checkElementIsVisible(accountsPage.personType);
  cy.checkElementIsVisible(accountsPage.organizationType);
  cy.enterTextInInputFieldWithPlaceholder(accountsPage.enterName, name);
  cy.enterTextInInputFieldWithPlaceholder(accountsPage.enterEmail, email);
  cy.enterTextInInputFieldWithPlaceholder(
    accountsPage.enterPhone,
    accountsPage.phone
  );
  cy.enterTextInInputFieldWithPlaceholder(
    accountsPage.enterAddress,
    accountsPage.address,
    0
  );
  cy.enterTextInInputFieldWithPlaceholder(
    accountsPage.enterZip,
    accountsPage.zipCode
  );
  cy.enterTextInInputFieldWithPlaceholder(
    accountsPage.enterCity,
    accountsPage.city
  );
  cy.enterTextInInputFieldWithPlaceholder(
    accountsPage.enterCountry,
    accountsPage.country
  );
  cy.tapElement(accountsPage.agentId);
  cy.tapElement(accountsPage.agent);
  cy.checkElementIsVisibleWithClass(accountsPage.cancelButton);
}

export function openAddAccountForm(type) {
  cy.tapElement(accountsPage.accounts);
  cy.tapElementWithText(accountsPage.actions);
  cy.checkTextIsVisible(accountsPage.addAccount);
  cy.tapElementWithText(accountsPage.addAccount);
  if (type === "p") {
    cy.tapElement(accountsPage.personType);
  } else if (type === "o") {
    cy.tapElement(accountsPage.organizationType);
  }
}
