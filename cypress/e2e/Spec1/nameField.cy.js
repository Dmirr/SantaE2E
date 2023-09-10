const registerFields = require("../../fixtures/pages/registerPage.json");
const regButton = require("../../fixtures/pages/buttons.json");
const testData = require("../../fixtures/testData.json");
import { faker } from "@faker-js/faker";

describe("test name field", () => {
  let correctName = faker.word.noun(5);
  let testMail =
    testData.testMailName +
    "+" +
    faker.word.sample(4) +
    testData.testMailServer;

  beforeEach(() => {
    cy.visit("/register");
  });
  it("user successfully registered with valid email and correct name", () => {
    cy.get(registerFields.nameField).type(correctName);
    cy.get(registerFields.emailField).type(testMail);
    cy.get(regButton.regButton).click();
    cy.contains("Письмо отправлено!").should("exist");
  });
  it("user unsuccessful registered with valid email and empty name field", () => {
    cy.get(registerFields.emailField).type(testMail);
    cy.get(regButton.regButton).click();
    cy.contains("Некорректное поле").should("exist");
  });
  it("user unsuccessful registered with valid email and uncorrect name  1 symbol", () => {
    cy.get(registerFields.nameField).type(testData.uncorrectName1);
    cy.get(registerFields.emailField).type(testMail);
    cy.get(regButton.regButton).click();
    cy.contains("Имя должно быть более 2 символов").should("exist");
  });
  it("user unsuccessful registered with valid email and uncorrect name  65 symbol", () => {
    cy.get(registerFields.nameField).type(testData.uncorrectName2);
    cy.get(registerFields.emailField).type(testMail);
    cy.get(regButton.regButton).click();
    cy.contains("Имя должно быть не более 64 символов").should("exist");
  });
});
