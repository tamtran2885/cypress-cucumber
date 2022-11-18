class HomePage {
  clickBurgerMenuBtn() {
    cy.contains("Open Menu").click();
  }

  clickLogoutBtn() {
    cy.contains("Logout").click();
  }

  visitHomePage() {
    cy.visit("/inventory.html");
  }
}

module.exports = new HomePage();
