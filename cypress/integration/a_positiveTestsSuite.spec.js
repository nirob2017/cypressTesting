import { accountsPage, joinPage, loginPage } from "../fixtures/constants";
import {
  generateEmail,
  generateName,
  generatePass,
  handleLogin,
  handleInputFieldOfAddAccount,
  checkAccountInList,
  openAddAccountForm,
} from "../helpers/helper";

describe("Positive test cases", () => {
  beforeEach(() => {
    cy.clearCookies();
  });

  it("TC-1: Visit login page", () => {
    cy.visit(joinPage.dtmsExt);
    cy.checkElementIsVisibleWithClass(loginPage.loginFormClass);
    cy.checkElementIsVisibleWithID(loginPage.menubarId);
    cy.checkElementIsVisibleWithClass(loginPage.languageFlagClas);
    cy.checkElementIsVisibleWithClass(loginPage.findHomeClass);
    cy.checkElementIsVisibleWithID(loginPage.joinDropDownId);
    cy.checkElementIsVisibleWithID(loginPage.signinDrodownId);
    cy.checkElementIsVisibleWithClass(loginPage.fbButtonClass);
    cy.checkInputFieldWithType(loginPage.emailField);
    cy.checkInputFieldWithType(loginPage.password);
    cy.checkButtondWithType(loginPage.submitButton);
    cy.checkElementIsVisible(loginPage.forgotPassword);
    cy.tapElementWithClass(loginPage.fbButtonClass, 1);
    cy.checkUrlExtension(loginPage.fb);
    cy.go("back");
    cy.tapElement(loginPage.forgotPassword);
    cy.checkInputFieldWithType(loginPage.emailField);
    cy.typeInInputField(loginPage.emailField, loginPage.dummyMail, 1);
    cy.clickButtonWithType(loginPage.submitButton, 1);
    cy.checkTextIsVisible(loginPage.checkYourEmail);
  });

  it("TC-2: Assert menu bar's Login form test", () => {
    cy.visit("/");
    cy.tapElementWithId(loginPage.signinDrodownId);
    cy.checkElementIsVisibleWithClass(loginPage.fbButtonClass);
    cy.checkInputFieldWithType(loginPage.emailField);
    cy.checkInputFieldWithType(loginPage.password);
    cy.checkButtondWithType(loginPage.submitButton);
    cy.checkElementIsVisibleWithClass(loginPage.forgotPasswordClass);
    cy.checkElementIsVisibleWithClass(loginPage.formJoinButtonClass);
    cy.tapElementWithClass(loginPage.fbButtonClass);
    cy.checkUrlExtension(loginPage.fb);
    cy.go("back");
    cy.tapElementWithId(loginPage.signinDrodownId);
    cy.tapElementWithClass(loginPage.forgotPasswordClass);
    cy.checkInputFieldWithType(loginPage.emailField);
    cy.typeInInputField(loginPage.emailField, loginPage.dummyMail, 1);
    cy.clickButtonWithType(loginPage.submitButton);
    cy.wait(1000);
    cy.tapElementWithId(loginPage.signinDrodownId);
    cy.tapElementWithClass(loginPage.formJoinButtonClass);
    cy.checkElementIsVisible(loginPage.joinFormClass);
  });

  it("TC-3: Login to the system test", () => {
    handleLogin();
  });

  it("TC-4: Join to the system test", () => {
    cy.visit("/");
    cy.tapElementWithId(loginPage.joinDropDownId);
    cy.tapElement(joinPage.fbButton);
    cy.tapElementWithClass(joinPage.checkmarkClass);
    cy.clickButtonWithType(loginPage.submitButton);
    cy.checkUrlExtension(loginPage.fb);
    cy.go("back");
    cy.tapElementWithId(loginPage.joinDropDownId);
    cy.tapElement(joinPage.loginButton);
    cy.checkElementIsVisible(joinPage.signInForm);
    cy.tapElementWithId(loginPage.joinDropDownId);
    cy.checkElementIsVisible(joinPage.joinWithEmail);
    cy.tapElement(joinPage.joinWithEmail);
    let email = generateEmail();
    let name = generateName();
    let pass = generatePass();
    cy.checkElementIsVisibleWithID(joinPage.nameField);
    cy.typeInInputFieldUsingName(joinPage.nameField, name);
    cy.typeInInputFieldUsingName(joinPage.joinEmailField, email);
    cy.typeInInputFieldUsingName(joinPage.passwordField, pass);
    cy.typeInInputFieldUsingName(joinPage.confirmPassField, pass);
    cy.tapElementWithClass(joinPage.checkmarkClass);
    cy.clickButtonWithType(loginPage.submitButton);
    cy.checkElementIsVisibleWithClass(joinPage.activateYourAccount);
    cy.tapElementWithText(joinPage.ok);
  });

  it("TC-5: Create Account for Person test", () => {
    handleLogin();
    let email = generateEmail();
    let name = generateName();
    openAddAccountForm("p");
    cy.enterTextInInputFieldWithPlaceholder(
      accountsPage.enterNid,
      accountsPage.nid
    );
    handleInputFieldOfAddAccount(name, email);
    cy.tapElementWithClass(accountsPage.addAccountButton);
    checkAccountInList(name, email.toLocaleLowerCase());
  });

  it("TC-6: Create Account for Organization test", () => {
    handleLogin();
    let email = generateEmail();
    let name = generateName();
    openAddAccountForm("o");
    cy.enterTextInInputFieldWithPlaceholder(
      accountsPage.contactPerson,
      accountsPage.contactName
    );
    cy.enterTextInInputFieldWithPlaceholder(
      accountsPage.enterAddress,
      accountsPage.address,
      1
    );
    handleInputFieldOfAddAccount(name, email);
    cy.tapElementWithClass(accountsPage.addAccountButton);
    checkAccountInList(name, email.toLocaleLowerCase());
  });
});
