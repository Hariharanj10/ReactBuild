describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/')
  })
  it('contains text',() => {
    cy.visit('http://localhost:8080/')
    cy.get("h1").should(
      "exist")
  })
})