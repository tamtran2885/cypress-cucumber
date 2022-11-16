import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const LoginPage = require("../../pageobjects/LoginPage");

Given("I open login page", () => {
  LoginPage.visitLoginPage();
});

When("I submit login", () => {
  LoginPage.submitLogin("hoang@gmail.com", "123456");
});

Then("I should see homepage", () => {
  // get element after login
  cy.get("#basic-nav-dropdown").should("have.attr", "href");
});
