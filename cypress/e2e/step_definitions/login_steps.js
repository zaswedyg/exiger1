import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../pages/LoginPage'

const loginPage = new LoginPage();

Given('I am on the login page', () => {
  loginPage.visit();
});

When('I enter valid username and password', () => {
  loginPage.login();
});

When('I enter invalid username and valid password', () => {
  loginPage.login_invalid_username();
});

When('I enter valid username and invalid password', () => {
  loginPage.login_invalid_password();
});

When('I login with empty fields', () => {
  loginPage.getSubmitButton().click();
});

When('I click Forgot your password?', () => {
  loginPage.getForgotPasswordButton().click();
});

When('I enter valid username and click Reset Password', () => {
  loginPage.enter_username_click_reset_password();
});

When('I click Cancel', () => {
  cy.contains('Cancel').click();
});

Then('I should be logged in', () => {
  cy.url().should('include', '/dashboard');
});

Then('I should see invalid credentials alert', () => {
  cy.get('.oxd-alert').should('have.text', 'Invalid credentials');
});

Then('Required alerts are displayed', () => {
  cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
  cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
});

Then('Reset Password link sent successfully', () => {
  cy.get('.oxd-text--h6').should('have.text', 'Reset Password link sent successfully')
});
