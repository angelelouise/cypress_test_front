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
       it('Checkbox',()=>{
           cy.selectCheckbox(1);
           cy.checkIfSelectedCheckboxIs(1);
           cy.selectCheckbox(2);
           cy.checkIfSelectedCheckboxIs(2);
           cy.selectDisabledCheckbox(3);
           cy.selectCheckbox(1);
           cy.checkIfUnselectedCheckboxIs(1);
           cy.selectCheckbox(2);
           cy.checkIfUnselectedCheckboxIs(2);
       })
       it('Radiobutton',()=>{
           cy.selectRadiobutton(1);
           cy.checkIfSelectedRadiobuttonIs(1);
           cy.checkIfUnselectedRadiobuttonIs(2);
           cy.selectRadiobutton(2);
           cy.checkIfSelectedRadiobuttonIs(2);
           cy.checkIfUnselectedRadiobuttonIs(1);
           cy.selectDisabledRadiobutton(3);
       })
       it.skip('Buttongroup',()=>{
           cy.selectEsquerda();
           cy.checkUnselectedMeio();
           cy.checkUnselectedDireita();

           cy.selectMeio();
           cy.checkUnselectedDireita();
           cy.checkUnselectedEsquerda();

           cy.selectDireita();
           cy.checkUnselectedMeio();
           cy.checkUnselectedEsquerda();
       })
       it('Dropdown',()=>{

       })
       it('Accordion',()=>{

       })
       it.only('Submit file',()=>{
            cy.submitFile()
       })
       it('Range',()=>{

       })
   });
})