export default class SummaryCart {
  clickNextStepInMyCart() {
    cy.get(".button").contains("Dalej").click();
  }
}
