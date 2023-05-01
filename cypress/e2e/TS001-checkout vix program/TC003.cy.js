  /*TC003 - Unauthenticated user checkout program and cancel the login option*/
  
  it('Unauthenticated user checkout program and cancel the login option', function () {
    
    cy.visit('/virtual-internship-experience/explore')
    //choose one program that will be registered
    cy.get('#root > div > div:nth-child(3)> div:nth-child(8) > div:nth-child(1)').click()
    cy.get('[data-cy=register-vix-button]').click({force: true})
    //verify login pop up confirmation is shown
    cy.get('[data-cy=login-first-modal-title]').should('exist')

    //click batal button
    cy.get('body > div:nth-child(9) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > button:nth-child(1)').click()
    //verify system redirect to login form
    cy.url().should('include', '/virtual-internship-experience/')

  })