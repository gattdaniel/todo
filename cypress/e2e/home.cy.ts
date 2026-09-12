describe('Todo List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it("ajoute une tâche et l'affiche dans la liste", () => {
    cy.get('[data-cy=todo-input]').type('Apprendre Cypress');
    cy.get('[data-cy=add-button]').click();
    cy.get('[data-cy=todo-list]').should('contain', 'Apprendre Cypress');
  });

  it("n'ajoute pas de tâche vide", () => {
    cy.get('[data-cy=add-button]').click();
    cy.get('[data-cy=todo-list]').should('be.empty');
  });

  it("Ajouter plusieurs tâches et vérifier qu'elles sont toutes présentes", () => {
    cy.get('[data-cy=todo-input]').type('Apprendre Cypress');
    cy.get('[data-cy=add-button]').click();
    cy.get('[data-cy=todo-input]').type('Apprendre Cypress deux');
    cy.get('[data-cy=add-button]').click();
    cy.get('[data-cy=todo-input]').type('Apprendre Cypress trois');
    cy.get('[data-cy=add-button]').click();
    cy.get('[data-cy=todo-list]')
      .should('contain', 'Apprendre Cypress')
      .and('contain', 'Apprendre Cypress deux')
      .and('contain', 'Apprendre Cypress trois');
  });

  it("L'input se vide après l'ajout", () => {
    cy.get('[data-cy=todo-input]').type('Apprendre Cypress de nouveau cypress');
    cy.get('[data-cy=add-button]').click();
    cy.get('[data-cy=todo-input]').should('have.value', '');
  });
});
