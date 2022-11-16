import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open login page", () => {
  cy.visit("/login");
});

When("I submit login", () => {
  cy.get("#email").type("hoang@gmail.com");
  cy.get("#password").type("123456");
  cy.get("button[type='submit']").click();
});

Then("I should see homepage", () => {
  // get element after login
  cy.get("#basic-nav-dropdown").should("have.attr", "href");
});
