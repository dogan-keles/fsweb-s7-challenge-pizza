describe("Cypress Pizza Sitesi Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Navigate to Home Page", () => {});
  it("Checking Order-Pizza Button", () => {
    cy.get("#order-pizza").click();
  });
  it("Order Pizza is disabled", () => {
    cy.get("#order-pizza").click();
    cy.get("#order-button").should("have.disabled", true);
  });
});
it("Activation of Order Button Tests", () => {
  cy.visit("http://localhost:3000/pizza");
  cy.get('[type="radio"]').first().check();
  cy.get("select").select("Normal");
  cy.get(".myCheckbox").each((checkbox, index) => {
    if (index < 10) {
      cy.wrap(checkbox).click();
    }
  });
  cy.get("#order-button").should("be.disabled");
  cy.get(".myCheckbox").eq(10).click();
  cy.get('input[name="nameSurname"]').type("Doğan Keleş");
  cy.get("#order-button").should("not.have.attr", "disabled", false);
});
it("Activation of Order Button Tests", () => {
  cy.visit("http://localhost:3000/pizza");
  cy.get('[type="radio"]').first().check();
  cy.get("select").select("Normal");
  cy.get(".myCheckbox").each((checkbox, index) => {
    if (index < 10) {
      cy.wrap(checkbox).click();
    }
  });
  cy.get("#order-button").should("be.disabled");
  cy.get(".myCheckbox").eq(10).click();
  cy.get('input[name="nameSurname"]').type("Doğan Keleş");
  cy.get("#order-button").should("have.disabled", true);
  cy.get("#order-button").click();
  cy.url().should("include", "/success");
});
