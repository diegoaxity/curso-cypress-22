/// <reference types="cypress" />

describe("pagina de color individual", () => {
  before(() => {
    sessionStorage.setItem("token", "QpwL5tke4Pnpja7X4");
  });

  it("color rojo", () => {
    cy.visit("/colors/3");

    cy.contains("ID: 3")
      .should("exist")
      .should("have.css", "font-size", "16px");
    cy.contains("Nombre: true red")
      .should("exist")
      .should("have.css", "font-size", "14px");
    cy.contains("Año: 2002")
      .should("exist")
      .should("have.css", "font-size", "14px");
    cy.contains("Color: #BF1932")
      .should("exist")
      .should("have.css", "font-size", "14px");
    cy.contains("Pantone: 19-1664")
      .should("exist")
      .should("have.css", "font-size", "14px");

    cy.get(".color-sample").should(
      "have.css",
      "background-color",
      "rgb(191, 25, 50)"
    );
  });
});
