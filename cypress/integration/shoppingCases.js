context('Actions', () => {
    beforeEach(() => {
      cy.viewport(1440, 1000) 
      cy.visit('http://tutorialsninja.com/demo/')
    })

    it('Add item to cart', () => {
        cy.contains('Add to Cart').first().click()
        cy.contains('Shopping Cart').click()
        cy.get('.table').should('contain', 'MacBook')
      })

      it('Remove item from cart', () => {
        cy.contains('Add to Cart').first().click()
        cy.contains('Shopping Cart').click()
        cy.get('.table').should('contain', 'MacBook')
        cy.get('[data-original-title="Remove"]').click()
        cy.get('.table').should('not.contain', 'MacBook')
      })  

      it('Checkout from cart', () => {
        cy.contains('Add to Cart').first().click()
        cy.contains('Shopping Cart').click()
        cy.get('.table').should('contain', 'MacBook')
        cy.contains('Checkout').click()
        cy.url().should('include', '/checkout')
      })  

})  