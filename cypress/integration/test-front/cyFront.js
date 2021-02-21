describe('Front-end testing of a example page',()=>{
   before(()=>{
       //before all tests load the fixtures needed
       cy.loadFixtures()
   })
   beforeEach(()=>{
       //before each test, reload the page to clear data and visit the site
       cy.reload();
       cy.visit("https://angelelouise.github.io/");
       cy.visitPage();
   });
   describe('Testing input components',()=>{
       it('Insert string on input field',()=>{
           cy.get('@defaulData').then((defaulData)=>{
               cy.typeOnInputText(defaulData.defaultString);
               cy.clickOnButton();
               cy.checkIfLabelIsFilledWith('Tester says: ' + defaulData.defaultString);
           })
       });
       it('Select a option',()=>{
           cy.selectOption('3');
           cy.checkIfOptionSelectedIs('3');
       });
       it('Select options',()=>{
           var listOptions = ['1', '3', '5']
           cy.selectOptions(listOptions);
           cy.checkIfOptionsSelectedAre(listOptions);
       })

   });
})