//login to rakamin academy's website
Cypress.Commands.add('login', () => {
    //input email and sandi
    cy.get('[data-cy=login-email-text-field]').type('seio1@yopmail.com')
    cy.get('[data-cy=login-password-text-field]').type('seio1234')

    //click masuk button
    cy.get('[data-cy=login-submit-button').click()
    
    //verify system redirect to dashboard enrolled course
    cy.url().should('include', '/virtual-internship-experience/')

  })

  /*TC002 - Unauthenticated user checkout program*/
  
  it('Unauthenticated user checkout program', function () {
    
    cy.visit('/virtual-internship-experience/explore')
    //choose one program that will be registered
    cy.get('#root > div > div:nth-child(3)> div:nth-child(8) > div:nth-child(1)').click()
    cy.get('[data-cy=register-vix-button]').click({force: true})
    //verify login pop up confirmation is shown
    cy.get('[data-cy=login-first-modal-title]').should('exist')

    //click login button
    cy.get('[data-cy=login-first-button]').click()
    //verify system redirect to login form
    cy.url().should('include', '/login')

    //call login function
    cy.login()
    
    cy.wait(2000)

    //click daftar sekarang button
    cy.get('[data-cy=register-vix-button]').click({force: true})
    //verify form application is shown by system
    cy.get('[data-cy=vix-form-title]').should('exist')

    //fill the vix application form
    cy.get('[data-cy=full-name-text-field').clear()
    cy.get('[data-cy=full-name-text-field').type('Seio')

    cy.get('[data-cy=phone-number-text-field').clear()
    cy.get('[data-cy=phone-number-text-field').type('089129876543')

    cy.get('[data-cy=linkedin-url-text-field').clear()
    cy.get('[data-cy=linkedin-url-text-field').type('https://linkein.com/seio')
    
    cy.get('[data-cy=vix-info-source-option-1]').click()
    cy.get('[data-cy=agreement-checkbox]').click()
    //verify submit button is clickable
    cy.get('[data-cy=vix-form-submit-button]').should('not.be.disabled')

    //click submit button
    cy.get('[data-cy=vix-form-submit-button]').click()
    //verify confirmation pop up is shown
    cy.get('[data-cy=confirmation-modal-title]').should('exist')

    //confirm to submit form filled in
    cy.get('[data-cy=button-confirm]').click()
    //verify system redirect to checkout page
    cy.url().should('include', '/checkout')

    //choose vip access
    cy.get('[data-cy=vip-access-checkbox]').click()
    cy.get('[data-cy=vip-access-checkbox]').click()

    //click lanjutkan pembayaran button
    cy.get('[data-cy=continue-to-payment-button]').click()

  })