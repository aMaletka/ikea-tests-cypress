export default class BilingPage {
  filingTheForm() {
    cy.get("#invoiceAddress-firstName").type("Anna");
    cy.get("#invoiceAddress-lastName").type("Test");
    cy.get("#invoiceAddress-street").type("Prosta");
    cy.get("#invoiceAddress-streetNumber").type("1");
    cy.get("#invoiceAddress-zip").type("20-333");
    cy.get("#invoiceAddress-city").type("Lublin");
    cy.get("#invoiceAddress-email").type("test@testy.pl");
    cy.get("#invoiceAddress-emailRepetition").type("test@testy.pl");
    cy.get(
      '[aria-describedby="invoiceAddress-phoneNumbersHome-description"]'
    ).type("777666555");
    cy.get(".button").contains("Dalej").click();
  }
}
