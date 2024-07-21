import { And, Given, Then, When} from "cypress-cucumber-preprocessor/steps";
import { paraloca } from "../../support/Parameterlocators";



Given('Home page is opened', () => {
   // cy.get(paraloca.emailInput).type('edson@gmail.com');
    cy.origin('https://dev-c61e747e5cpeynem.us.auth0.com', () => {
        cy.contains('Welcome', { timeout: 5000}).should('be.visible');
        cy.get('#username').type('eortiliza@gmail.com')
        cy.wait(3000)
      });
});

When('enter email {string} and password {string}', (email,password) => {
    cy.visit("https://web.sims.ovg-qa.com/") 
    cy.wait(3000)  
    cy.origin('https://dev-c61e747e5cpeynem.us.auth0.com', () => {
      
      //  cy.get('#username').type('eortiliza@gmail.com')
cy.get(paraloca.emailInput).type(email);
cy.get(paraloca.passwordInput).type(password);
});

});

And('click sign in', function(){
    cy.origin('https://dev-c61e747e5cpeynem.us.auth0.com', () => {
cy.get(paraloca.signInButton).click();
});
})

Then('verify the message {string}', (message) => {
    cy.origin('https://dev-c61e747e5cpeynem.us.auth0.com', () => {
    cy.waitForElement('.message-selector', 5000)
    cy.get(message,).should('be.visible');
});
})
