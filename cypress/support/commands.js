Cypress.Commands.add('loadFixtures',(data)=>{
    cy.fixture('defaultData').as('defaulData')
})
Cypress.Commands.add('visitPage',(data)=>{
    cy.get('.button').contains('Acessar Página').click()
    //another way
    //cy.get(':nth-child(2) > .col-sm-8 > main > .row > :nth-child(1) > .button').click()
})
Cypress.Commands.add('typeOnInputText',(data)=>{
    cy.get('#input_texto').type(data)
})
Cypress.Commands.add('clickOnButton',()=>{
    cy.get('#input_submit').click()
})
Cypress.Commands.add('checkIfLabelIsFilledWith',(data)=>{
    cy.get('#exampleForm\\.Text').should('have.value', data)
})
Cypress.Commands.add('selectOption',(data)=>{
    cy.get('#exampleForm\\.ControlSelect1').select(data)
})
Cypress.Commands.add('checkIfOptionSelectedIs',(data)=>{
    cy.get('#exampleForm\\.ControlSelect1').should('have.value', data )
})
Cypress.Commands.add('selectOptions',(data)=>{
    cy.get('#exampleForm\\.ControlSelect2').select(data)
})
Cypress.Commands.add('checkIfOptionsSelectedAre',(data)=>{
    // and because it is an array we need to use deep equality
    // against the yielded list from ".invoke('val')"
    cy.get('#exampleForm\\.ControlSelect2').invoke('val').should('deep.equal', data )
})