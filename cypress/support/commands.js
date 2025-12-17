// cypress/support/commands.js
Cypress.Commands.add('selectFromAutocomplete', (sectionHeading, searchText, optionText) => {
  cy.contains('h2', sectionHeading)
    .next('div')
    .within(() => {
      cy.get('input[role="combobox"]').first()
        .click()
        .type(searchText);
    });
  
  cy.get('[role="listbox"]').should('be.visible');
  cy.get('[role="option"]').contains(optionText).click();
});

Cypress.Commands.add('selectFromDropdown', (sectionHeading, optionText) => {
  cy.contains('h2', sectionHeading)
    .next('div')
    .within(() => {
      cy.get('div[role="button"]').first().click();
    });
  
  cy.get('[role="listbox"]').should('be.visible');
  cy.get('[role="option"]').contains(optionText).click();
});

Cypress.Commands.add('getTableInSection', (sectionHeading) => {
  return cy.contains('h2', sectionHeading)
    .next('div')
    .find('table').first();
});

Cypress.Commands.add('fillTextFieldInSection', (sectionHeading, fieldIndex, text) => {
  cy.contains('h2', sectionHeading)
    .next('div')
    .within(() => {
      cy.get('input').eq(fieldIndex)
        .clear({ force: true })
        .type(text, { force: true });
    });
});