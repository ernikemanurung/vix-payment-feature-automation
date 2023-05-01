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

  /*TC005 - Invalid input in nomor telepon’s field in the application form*/
  
  it('Invalid input in nomor telepon’s field in the application form', function () {
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
    cy.get('[data-cy=phone-number-text-field').type('string')
    //verify the Nomor Whatsapp's field is empty
    cy.get('[data-cy=phone-number-text-field').should('be.empty')
    
  })