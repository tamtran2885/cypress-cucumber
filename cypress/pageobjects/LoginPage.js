class LoginPage {
  elements = {
    uerNameInput: () => cy.get("[data-test='username']"),
    passwordInput: () => cy.get("[data-test='password']"),
    loginBtn: () => cy.get("[data-test='login-button']"),
    errorMessage: () => cy.get("[data-test='error']"),
  };

  typeEmail(username) {
    this.elements.uerNameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username, password) {
    this.elements.uerNameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }

  visitLoginPage() {
    cy.visit("/");
  }
}

module.exports = new LoginPage();
