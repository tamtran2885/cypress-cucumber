import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const HomePage = require("../../pageobjects/HomePage");
const LoginPage = require("../../pageobjects/LoginPage");

Given("User is located at login page", () => {
  LoginPage.visitLoginPage();
});

When(
  "User login successfully with valid credentials including {string} and {string}",
  (username, password) => {
    LoginPage.submitLogin(username, password);
  }
);

Then("User is located at homepage", () => {
  cy.url().should("include", "/inventory.html");
});

When(
  "User click on burger menu button, and user click on logout button",
  () => {
    HomePage.clickBurgerMenuBtn();
    HomePage.clickLogoutBtn();
  }
);

Then("User should logout the application, and see login page", () => {
  cy.url().should("eq", "https://www.saucedemo.com/");
});
