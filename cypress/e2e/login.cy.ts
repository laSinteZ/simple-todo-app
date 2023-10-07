// https://on.cypress.io/api

describe('My First Test', () => {
  it('logs in with admin account', () => {
    cy.visit('/'); // visit your vue app URL

    cy.get('input[name=username]')
      .type('admin') // input admin as username
      
    cy.get('input[name=password]')
      .type('admin') // input admin as password
      
    cy.get('button[type=submit]')
      .click(); // click the sign in button

    // after login, it should display welcome messages, edit the selector as per your actual DOM structure
    cy.contains('Welcome, admin').should('be.visible');
  });

  it('displays error message for incorrect login', () => {
    cy.visit('/'); // visit your vue app URL

    cy.get('input[name=username]')
      .type('incorrectUsername'); // input incorrect username
      
    cy.get('input[name=password]')
      .type('incorrectPassword'); // input incorrect password
      
    cy.get('button[type=submit]')
      .click(); // click the sign in button

    // check the error hint  
    cy.contains('Incorrect username or password').should('be.visible');
  });
})
