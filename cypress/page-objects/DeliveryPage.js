export default class DeliveryPage {
  addZipCodeAndClickNext(zipCode) {
    cy.get("#zipInInput").type(zipCode);
    cy.get(`[data-test-id="button_zipIn"]`).click();
  }

  chooseDeliveryPlaceAndConfirm() {
    cy.get("button").contains("Odbiór w sklepie").click();
    cy.get(`[data-cy-id="store_selector_button"]`).click();
    cy.get("button").contains("Lublin - sklep IKEA").click();
    cy.get("button").contains("Potwierdź swój wybór ").click();
    cy.get(`[data-cy-id="delivery_submit"]`).click();
  }
}
