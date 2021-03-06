context('Actions', () => {
  beforeEach(() => {
    cy.viewport(1440, 1000) 
    cy.visit('http://tutorialsninja.com/demo/')
  })

  it('Login with right creds', () => {
    cy.contains('My Account').click()
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.get('#input-email')
    .type('k163967@lhr.nu.edu.pk')
    .should('have.value', 'k163967@lhr.nu.edu.pk')
    cy.get('#input-password')
    .type('justatest')
    cy.get('[value="Login"]').click()
    cy.url().should('include', '/account')
    cy.contains('My Account').click()
    cy.contains('Logout').click()
    cy.url().should('include', '/logout')
  })

  it('Login with wrong password', () => {
    cy.contains('My Account').click()
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.get('#input-email')
    .type('a163967@lhr.nu.edu.pk')
    .should('have.value', 'a163967@lhr.nu.edu.pk')
    cy.get('#input-password')
    .type('justatest')
    cy.get('[value="Login"]').click()
    cy.get('.alert').should('contain', ' Warning: No match for E-Mail Address and/or Password.')
  })

  it('Login with wrong email', () => {
    cy.contains('My Account').click()
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.get('#input-email')
    .type('k163967@lhr.nu.edu.pk')
    .should('have.value', 'k163967@lhr.nu.edu.pk')
    cy.get('#input-password')
    .type('justawrongpassword')
    cy.get('[value="Login"]').click()
    cy.get('.alert').should('contain', ' Warning: No match for E-Mail Address and/or Password.')
  })

})
