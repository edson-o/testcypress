/*cy.get('#elementId');
cy.get('.className');
cy.get('[type="submit"]');
cy.get('[data-test="example"]');
cy.get('button');
cy.get('input');
cy.contains('Submit');
cy.contains('button', 'Submit');
cy.get('.parent .child');
cy.get('#parentId .childClass');
cy.get('li:first');
cy.get('li:last');
cy.get('li:nth-child(2)');
cy.get('input[type="text"].form-control');
cy.get('div#parentId > .childClass');
Cypress.Commands.add('getByEmailInput', () => {
    return cy.get('input[type="email"]');
  });
  cy.getByEmailInput().type('example@example.com');
  cy.xpath('//input[@type="email"]');
  

  cy.get('[name="email"]').type('testuser@example.com');

  // Verificar el mensaje de bienvenida
  cy.contains('Sign in', { timeout: 5000}).should('be.visible');
  Cypress.Commands.add('waitForElement', (selector, timeout = 10000) => {
    cy.get(selector, { timeout }).should('be.visible');
  });

// Esperar a que un elemento sea visible
cy.waitForElement('#username').type('testuser');

 // Esperar a que un elemento clave de la página esté presente y visible
    cy.get('#user-name', { timeout: 10000 }).should('be.visible');

*/