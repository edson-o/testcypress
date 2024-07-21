beforeEach(function(){
    cy.log('Before Hooks')
    cy.visit("https://web.sims.ovg-qa.com/") 
    cy.wait(3000)  
})

after(function(){
    cy.log('After Hooks')    
})