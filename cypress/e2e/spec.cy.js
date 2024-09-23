describe("Burrito Builder spec", () => {
  beforeEach(()=> {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
      statusCode: 200,
      fixtures: 'tacoBell'
    }).as('tacoList')

    cy.visit('http://localhost:3000/')
  })

  it("should display title when page loads", () => {
    cy.get('h1').should('contain', 'Burrito Builder')
  });
});
