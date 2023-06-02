const registerFields = require("../fixtures/pages/registerPage.json");
const regButton = require("../fixtures/pages/buttons.json");
const testData = require("../fixtures/testData.json");
import { faker } from "@faker-js/faker";

describe("test email field", () => {
  let correctName = faker.word.noun(5);
  let testMail =
    testData.testMailName +
    "+" +
    faker.word.sample(4) +
    testData.testMailServer;

  beforeEach(() => {
    cy.visit("/register");
  });
  it("user unsuccessful registered with  correct name and empty email field", () => {
    cy.get(registerFields.nameField).type(correctName);
    cy.get(regButton.regButton).click();
    cy.contains("Некорректное поле").should("exist");
  });
  it("user unsuccessful registered with invalid email and correct name", () => {
    cy.get(registerFields.nameField).type(correctName);
    cy.get(registerFields.emailField).type(testData.uncorrectEmail);
    cy.get(regButton.regButton).click();
    cy.contains("Некорректный email").should("exist");
  });
});
