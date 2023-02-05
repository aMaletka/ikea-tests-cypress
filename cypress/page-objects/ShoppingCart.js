export default class ShoppingCart {
  changeQuantity(quantity) {
    cy.get("select").select(quantity).should("have.value", quantity);
  }

  clickNextAndOrderAsGuest() {
    cy.get(".shoppingBag_sidebar__utJFe")
      .find(`[data-testid="checkoutButton__default"]`)
      .click();
    cy.get(".cart-ingka-btn").contains("Kontynuuj jako gość").click();
  }
}
