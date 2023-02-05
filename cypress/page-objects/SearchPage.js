export default class SearchPage {
  findProductAndClick(productName) {
    cy.get("span").contains(productName).click();
  }
}
