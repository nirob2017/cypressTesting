import { accountsPage, joinPage, loginPage } from "../fixtures/constants";
import {
  handleLogin,
  openAddAccountForm,
} from "../helpers/helper";

describe("Negative test cases", () => {
  beforeEach(() => {
    cy.clearCookies();
  });

  it("TC-9: Login with wrong input", () => {
    cy.visit("/");
    cy.tapElementWithId(loginPage.signinDrodownId);
    cy.clickButtonWithType(loginPage.submitButton);
    cy.checkTextIsVisible(loginPage.validEmailError);
    cy.checkTextIsVisible(loginPage.passwordError);
    cy.typeInInputFieldUsingName(joinPage.joinEmailField, loginPage.email);
    cy.typeInInputField(loginPage.password, loginPage.wrongPass);
    cy.clickButtonWithType(loginPage.submitButton);
    cy.checkTextIsVisible(loginPage.couldNotLogin);
    cy.wait(4000);
    cy.tapElementWithClass(loginPage.forgotPasswordClass);
    cy.typeInInputField(loginPage.emailField, loginPage.invalidEmail, 1);
    cy.clickButtonWithType(loginPage.submitButton);
    cy.checkTextIsVisible(loginPage.validEmailError);
    cy.typeInInputField(loginPage.emailField, loginPage.validMail, 1);
    cy.clickButtonWithType(loginPage.submitButton);
    cy.checkTextIsVisible(loginPage.somethingWentWrong);
  });

  it("TC-10: Join with wrong input test", () => {
    cy.visit("/");
    cy.tapElementWithId(loginPage.joinDropDownId);
    cy.tapElement(joinPage.joinWithEmail);
    cy.tapElementWithClass(joinPage.checkmarkClass);
    cy.clickButtonWithType(loginPage.submitButton);
    cy.checkTextIsVisible(loginPage.validEmailError);
    cy.checkTextIsVisible(loginPage.passwordError);
    cy.checkTextIsVisible(joinPage.nameError);
    cy.typeInInputFieldUsingName(joinPage.nameField, joinPage.dummyName);
    cy.typeInInputFieldUsingName(joinPage.joinEmailField, loginPage.validMail);
    cy.typeInInputFieldUsingName(joinPage.passwordField, joinPage.dummyPass);
    cy.typeInInputFieldUsingName(
      joinPage.confirmPassField,
      joinPage.wrongPassword
    );
    cy.clickButtonWithType(loginPage.submitButton);
    cy.checkTextIsVisible(loginPage.passwordError);
    cy.checkTextIsVisible(joinPage.mismatchError);
  });

  it("TC-11: Create Account for person with wrong input test", () => {
    handleLogin();
    openAddAccountForm("p");
    cy.tapElementWithClass(accountsPage.addAccountButton);
    cy.checkTextIsVisible(accountsPage.nameRequired);
    cy.checkTextIsVisible(accountsPage.emailRequired);
    cy.checkTextIsVisible(accountsPage.agentRequired);
  });

  it("TC-12: Create Organization account with wrong input", () => {
    handleLogin();
    openAddAccountForm("o");
    cy.tapElementWithClass(accountsPage.addAccountButton);
    cy.checkTextIsVisible(accountsPage.nameRequired);
    cy.checkTextIsVisible(accountsPage.emailRequired);
    cy.checkTextIsVisible(accountsPage.agentRequired);
    cy.checkTextIsVisible(accountsPage.contactRequired);
  });
});
