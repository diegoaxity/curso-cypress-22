/// <reference types="cypress" />

describe("Mi primera prueba", () => {
  it("Visitar pagina de Kitchen Sink", () => {
    cy.visit("https://example.cypress.io");

    cy.pause();

    cy.contains("type").click();

    // https://example.cypress.io/commands/actions
    cy.url().should("include", "/commands/actions");

    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");

    cy.pause();

    cy.get("button");
  });
});
