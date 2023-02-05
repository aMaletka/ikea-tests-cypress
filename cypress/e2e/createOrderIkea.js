import HomePage from "../page-objects/HomePage";
import ProductPage from "../page-objects/ProductPage";
import SearchPage from "../page-objects/SearchPage";
import ShoppingCart from "../page-objects/ShoppingCart";
import DeliveryPage from "../page-objects/DeliveryPage";
import IkeaFamilyModal from "../page-objects/IkeaFamilyModal";
import SummaryCart from "../page-objects/SummaryCart";
import BilingPage from "../page-objects/BilingPage";

describe("E2E - ikea", () => {
  beforeEach("ikea", () => {
    cy.visit("/");
  });

  it("Wyszukaj produkt i wypelnij dane do zlozenia zamowienia", function () {
    const homePage = new HomePage();

    homePage.acceptCookies();

    homePage.typeProductAndSearch("kubek");

    const searchPage = new SearchPage();

    searchPage.findProductAndClick("DINERA");

    const productPage = new ProductPage();

    productPage.changeColor();

    productPage.addToCart();

    productPage.goToCart();

    const shoppingCart = new ShoppingCart();

    shoppingCart.changeQuantity("8");

    shoppingCart.clickNextAndOrderAsGuest();

    const deliveryPage = new DeliveryPage();

    deliveryPage.addZipCodeAndClickNext("20-333");

    deliveryPage.chooseDeliveryPlaceAndConfirm();

    const ikeaFamilyModal = new IkeaFamilyModal();

    ikeaFamilyModal.clickDontHaveCart();

    const summaryCart = new SummaryCart();

    summaryCart.clickNextStepInMyCart();

    const bilingPage = new BilingPage();

    bilingPage.filingTheForm();
  });
});
