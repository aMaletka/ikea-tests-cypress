export default class ProductPage {
  changeColor() {
    cy.get(`[aria-label="Beżowy"]`).click();
  }

  addToCart() {
    cy.get(`[aria-label="Dodaj do koszyka"]`).click();
  }

  goToCart() {
    cy.get('[data-testid="go-to-cart"]').click();
  }
}
