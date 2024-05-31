describe('Upload file using native upload', () => {
    it(' ', () => {
      cy.visit('https://kitchen.applitools.com/')
      // cy.intercept('/ingredents/iframe').as('newUrl')
    //   cy.contains('iFrame').should('exist').and('be.visible').click()
      cy.get('[href="/ingredients/iframe"]').should('be.visible').click()
      // cy.wait('@newUrl')
      cy.get('#youtube-table-cypress').should('exist').wait(2000)
      cy.get('#youtube-table-cypress').should('exist').chkiFrameLoaded()
      .find('button[aria-label="Play"]').should('exist').click()
     
    })
})