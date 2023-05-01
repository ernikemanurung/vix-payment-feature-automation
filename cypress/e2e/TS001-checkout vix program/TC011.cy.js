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

  /*TC011 - User checkout program without select any access (basic or vip)*/
  
  it('User checkout program without select any access (basic or vip)', function () {
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
    cy.get('#root > div > div:nth-child(3)> div:nth-child(9)> div:nth-child(1)').click()
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

    //unclick default vip access checked
    cy.get('[data-cy=vip-access-checkbox]').click()

    //verify system can't process payment and still in checkout page
    cy.url().should('include', '/checkout')

  })