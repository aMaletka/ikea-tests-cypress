export default class HomePage {
  acceptCookies() {
    return cy.get("#onetrust-accept-btn-handler").click();
  }

  typeProductAndSearch(product) {
    cy.get(".search-field").type(product);
    cy.get("#search-box__searchbutton").click();
  }
}
