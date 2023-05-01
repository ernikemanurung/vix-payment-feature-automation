//login to rakamin academy's website
Cypress.Commands.add('login', () => {
    cy.visit('/login')
    //input email and sandi
    cy.get('[data-cy=login-email-text-field]').type('seio1@yopmail.com')
    cy.get('[data-cy=login-password-text-field]').type('seio1234')

    //click masuk button
    cy.get('[data-cy=login-submit-button').click()
    
    //verify system redirect to dashboard enrolled course
    cy.url().should('include', '/dashboard')

    cy.wait(5000)
    
    //verify title is exist
    cy.get('[data-cy=dashboard-header-title]').should('exist')
  })

  /*TC002 - User checkout program with the program already registered as a Basic Access and upgrade to VIP Access*/
  
  it('User checkout program with the program already registered as a Basic Access and upgrade to VIP Access', function () {
    //call login function
    cy.login()
    
    cy.wait(2000)

    //click rakamin academy's icon to access the main page
    cy.get("#root > div:nth-child(1) > nav > div > a > img").click()

    //click hamburger menu
    cy.get("#root > div:nth-child(1) > div > img").click()
    cy.wait(1000)
    //verify menu is exist
    cy.get('[data-cy=courses-navigation]').should('exist')
    cy.get('[data-cy=dashboard-page-button]').should('exist')

    //expand virtual internship and choose explore vix program
    cy.get('[data-cy=vix-dropdown-menu]').click({multiple: true, force: true})
    cy.get('[data-cy=explore-vix-navigation]').click({multiple: true, force: true})
    //verify system redirect to vix explore page
    cy.url().should('include', '/virtual-internship-experience/explore')

    //close hamburger menu pop up
    cy.get('#root > div > div:nth-child(3)').as('btn').click({multiple: true, force: true})

    //choose one program that will be registered
    cy.get('#root > div > div:nth-child(3)> div:nth-child(9)> div:nth-child(2)').click()

    //click upgrade to vip now button
    cy.get('#root > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div > div> div> button').click({force: true})

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