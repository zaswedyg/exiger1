class LoginPage {
    visit() {
      cy.visit('');
    }
  
    getUsernameField() {
      return cy.get('input[name="username"]');
    }
  
    getPasswordField() {
      return cy.get('input[name="password"]');
    }
  
    getSubmitButton() {
      return cy.get('button[type="submit"]');
    }

    getForgotPasswordButton() {
      return cy.get('.orangehrm-login-forgot > .oxd-text')
    }
  
    login() {
      cy.fixture('credentials.json').then((credentials) => {
        this.getUsernameField().type(credentials.validUsername);
        this.getPasswordField().type(credentials.validPassword);
        this.getSubmitButton().click();
      })
    }

    login_invalid_username() {
      cy.fixture('credentials.json').then((credentials) => {
        this.getUsernameField().type(credentials.invalidUsername);
        this.getPasswordField().type(credentials.validPassword);
        this.getSubmitButton().click();
      })
    }

    login_invalid_password() {
      cy.fixture('credentials.json').then((credentials) => {
        this.getUsernameField().type(credentials.validUsername);
        this.getPasswordField().type(credentials.invalidPassword);
        this.getSubmitButton().click();
      })
    }

    enter_username_click_reset_password() {
      cy.fixture('credentials.json').then((credentials) => {
        cy.get('.oxd-input').type(credentials.validUsername);
        cy.get('.oxd-button--secondary').click()
      })
    }
  }
  
  export default LoginPage;
  