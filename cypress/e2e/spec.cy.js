describe("Burrito Builder spec", () => {
  beforeEach(()=> {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
      statusCode: 200,
      fixture: 'tacoBell'
    }).as('tacoList')

    cy.intercept('POST', 'http://localhost:3001/api/v1/orders', {
      statusCode: 200,
      fixture: 'person'
    })

    cy.visit('http://localhost:3000/')
  })

  it("should display title when page loads", () => {
    cy.get('h1').should('contain', 'Burrito Builder')
  });

  it('should allow user to type name and select ingredients and display error message', ()=> {
    cy.get('input').type('Leo')
    cy.get(':nth-child(15)').click()
    cy.get(':nth-child(15)').should('be.visible')
    cy.get('[name="carnitas"]').click()
    cy.get(':nth-child(15)').click()
    cy.get(':nth-child(15)').should('be.visible')
    cy.get('input').type('Leo')
    cy.get('[name="carnitas"]').click()
    cy.get('p').contains('carnitas')
    cy.get('[name="sofritas"]').click()
    cy.get('p').contains('carnitas, sofritas')
    cy.get('[name="lettuce"]').click()
    cy.get('p').contains('carnitas, sofritas, lettuce')
    cy.get(':nth-child(15)').click()
    cy.get('section > :nth-child(4)').should('be.visible')
  })
});
