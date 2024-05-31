describe('Same origin iFrame', () => {
    it(' ', () => {
      cy.visit('https://www.lambdatest.com/selenium-playground/')
      cy.contains('iFrame Demo').should('be.visible').click()
      cy.get('#iFrame1').should('be.visible').its('0.contentDocument.body').then($element=>{
        cy.wrap($element).find('.rsw-ce').clear().type('This is a test')
      })
    
            
    })
})