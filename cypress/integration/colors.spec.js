/// <reference types="cypress" />

describe("pagina de colores", () => {
  before(() => {
    // login manual

    // cy.visit("/");
    // cy.get("input[name='password']").type("123");
    // cy.get(".mat-card-actions > button").click();
    // cy.url().should("include", "/home");

    // simular login
    sessionStorage.setItem("token", "QpwL5tke4Pnpja7X4");

    cy.visit("/colors");
  });

  after(() => {
    sessionStorage.clear();
  });

  it("valida numero de elementos", () => {
    cy.get("tbody tr").should("have.length", 6);
  });

  it("valida numero de columnas y nombres", () => {
    cy.get("thead th").should("have.length", 7);
    cy.get("thead th").eq(0).should("have.text", " ID ");
    cy.get("thead th").eq(1).should("have.text", " Nombre ");
    cy.get("thead th").eq(2).should("have.text", " Año ");
    cy.get("thead th").eq(3).should("have.text", " Color ");
    cy.get("thead th").eq(4).should("have.text", "");
    cy.get("thead th").eq(5).should("have.text", " Pantone ");
    cy.get("thead th").last().should("have.text", "");
  });
});
