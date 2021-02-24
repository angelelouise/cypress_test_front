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
Cypress.Commands.add('selectCheckbox',(data)=>{
    cy.get('#inline-checkbox-'+data).click()
})
Cypress.Commands.add('checkIfSelectedCheckboxIs',(data)=>{
    cy.get('#inline-checkbox-'+data).should('be.checked')
})
Cypress.Commands.add('selectDisabledCheckbox',(data)=>{
    cy.get('#inline-checkbox-'+data).should('be.disabled')
})
Cypress.Commands.add('checkIfUnselectedCheckboxIs',(data)=>{
    cy.get('#inline-checkbox-'+data).should('not.be.checked')
})
Cypress.Commands.add('selectRadiobutton',(data)=>{
    cy.get('#inline-radio-'+data).click()
})
Cypress.Commands.add('checkIfSelectedRadiobuttonIs',(data)=>{
    cy.get('#inline-radio-'+data).should('be.checked')
})
Cypress.Commands.add('selectDisabledRadiobutton',(data)=>{
    cy.get('#inline-radio-'+data).should('be.disabled')
})
Cypress.Commands.add('checkIfUnselectedRadiobuttonIs',(data)=>{
    cy.get('#inline-radio-'+data).should('not.be.checked')
})
Cypress.Commands.add('selectEsquerda',()=>{
    cy.get('[aria-label="button_group"] > :nth-child(1)').click().should('to.match',':active')
})
Cypress.Commands.add('selectMeio',()=>{
    cy.get('[aria-label="button_group"] > :nth-child(2)').click().should('to.have.focus')
})
Cypress.Commands.add('selectDireita',()=>{
    cy.get('[aria-label="button_group"] > :nth-child(3)').click().should('to.have.focus')
})
Cypress.Commands.add('checkUnselectedEsquerda',(data)=>{
    cy.get('[aria-label="button_group"] > :nth-child(1)').should('not.to.have.focus')
})
Cypress.Commands.add('checkUnselectedMeio',(data)=>{
    cy.get('[aria-label="button_group"] > :nth-child(2)').should('not.to.have.focus')
})
Cypress.Commands.add('checkUnselectedDireita',(data)=>{
    cy.get('[aria-label="button_group"] > :nth-child(3)').should('not.to.have.focus')
})
Cypress.Commands.add('submitFile',(data)=>{

})