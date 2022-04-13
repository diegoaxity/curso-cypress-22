/// <reference types="cypress" />

describe("login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("login correcto", () => {
    // 1. Preparar la prueba
    cy.screenshot();

    cy.get("#mat-input-0").clear();
    cy.get("input[name='username']").type("eve.holt@reqres.in");

    cy.get("#mat-input-1").type("123");

    cy.screenshot();

    // 2. Realizar una accion

    cy.get(".mat-card-actions > button").click();

    // 3. Validar condicion de prueba
    cy.url().should("include", "/home");

    cy.screenshot();
  });

  it("login incorrecto", () => {
    cy.get("#mat-input-0").clear();
    cy.get("input[name='username']").type("fake@test.com");

    cy.get("#mat-input-1").type("123");

    cy.get(".mat-card-actions > button").click();

    cy.contains("Lo sentimos, ocurrió un error inesperado").should("exist");
  });

  it("validacion de campos", () => {
    cy.screenshot();

    cy.get("#mat-input-0").clear().blur();
    cy.get("#mat-input-1").clear().blur();

    cy.screenshot();

    cy.contains("Usuario requerido")
      .should("exist")
      .should("have.css", "color", "rgb(244, 67, 54)")
      .should("have.css", "font-size", "10.5px")
      .should("have.css", "font-weight", "400");

    cy.contains("Contraseña requerida")
      .should("exist")
      .should("have.css", "color", "rgb(244, 67, 54)")
      .should("have.css", "font-size", "10.5px")
      .should("have.css", "font-weight", "400");

    cy.get(".mat-card-actions > button").should("have.prop", "disabled", true);
  });
});
