/// <reference types="cypress"/>

describe('App', async () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('Ensure that create button not be disabled', () => {
    cy.get('button').should('not.be.disabled')
  })
})
