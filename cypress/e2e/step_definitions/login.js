import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const LoginPage = require("../../pageobjects/LoginPage");

Given("User is at login page", () => {
  LoginPage.visitLoginPage();
});

When(
  "User fills email with {string}, password with {string}, and clicks on the login button",
  (email, password) => {
    LoginPage.submitLogin(email, password);
  }
);

When(
  "User provides incorrect credentials, and clicks on the login button",
  (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.email);
      cy.log(row.password);
      LoginPage.submitLogin(row.email, row.password);
    });
  }
);

Then("User should see homepage", () => {
  // get element after login
  cy.get("#basic-nav-dropdown").should("have.attr", "href");
});

Then("The error message {string} is displayed", (errorMessage) => {
  LoginPage.elements.errorMessage().should("have.text", errorMessage);
});
