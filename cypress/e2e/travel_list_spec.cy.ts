describe("Lista de Viagens", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/")
  })

  it("exibe a lista de viagens", () => {
    cy.get(".card").should("have.length", 3)
  })

  it("exibe os detalhes corretos da primeira viagem", () => {
    cy.get(".card").first().click()

    cy.get(".travel-title").should("contain", "Euro Trip")
    cy.get(".travel-info ").should("contain", "Data")
  })
})
