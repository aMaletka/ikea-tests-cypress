export default class IkeaFamilyModal {
  clickDontHaveCart() {
    cy.get("button").contains("Nie, nie mam karty.").click();
  }
}
