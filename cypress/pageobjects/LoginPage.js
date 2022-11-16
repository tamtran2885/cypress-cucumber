class LoginPage {
  elements = {
    emailInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get("button[type='submit']"),
  };

  typeEmail(email) {
    this.elements.emailInput().type(email);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(email, password) {
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }

  visitLoginPage() {
    cy.visit("/login");
  }
}

module.exports = new LoginPage();
