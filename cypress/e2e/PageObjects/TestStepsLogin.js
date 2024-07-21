import { And, Given, Then, When} from "cypress-cucumber-preprocessor/steps";
import { paraloca } from "../../support/Parameterlocators";
import '../../support/commands';




Given('Home page is opened', () => {

    cy.origin('https://dev-c61e747e5cpeynem.us.auth0.com', () => {
        cy.contains('Welcome', { timeout: 5000}).should('be.visible');
      });
});

When('enter email {string} and password {string}', (email,password) => {
    cy.visit("https://web.sims.ovg-qa.com/") 
        cy.origin('https://dev-c61e747e5cpeynem.us.auth0.com', { args: { email, password,paraloca } }, ({ email, password,paraloca }) => {
cy.get(paraloca.emailInput).type(email);
cy.get(paraloca.passwordInput).type(password);
cy.get('[name="action"]').click();
//cy.waitForElement('#username').type('testuser');
});

});

And('click sign in', function(){
 
})

Then('verify the message', () => {
   // Returning to the main domain to continue with other interactions

    cy.contains('Hello', { timeout: 10000 }).should('be.visible');

})
