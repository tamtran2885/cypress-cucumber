import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const LoginPage = require("../../pageobjects/LoginPage");

Given("User is at login page", () => {
  LoginPage.visitLoginPage();
});

When(
  "User fills username with {string}, password with {string}, and clicks on the login button",
  (username, password) => {
    LoginPage.submitLogin(username, password);
  }
);

When(
  "User provides incorrect credentials, and clicks on the login button",
  (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.username);
      cy.log(row.password);
      LoginPage.submitLogin(row.username, row.password);
    });
  }
);

Then("User should see homepage", () => {
  cy.url().should("include", "/inventory.html");
});

Then("The error message {string} is displayed", (errorMessage) => {
  LoginPage.elements.errorMessage().should("have.text", errorMessage);
});
