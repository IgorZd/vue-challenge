
describe('4 - Features Interactions', () => {
  describe('A - Sort after paginate', () => {
    before(()=>{
      cy.visit('http://localhost:8080/');
    });

    it('Should land on first page', ()=>{
      cy.get('[data-cy=cell-1-1]').contains('Stephens Townsend');
    });

    it('Should go to page 2', ()=>{
      cy.get('[data-cy=go-to-page-2]').click();
      cy.get('[data-cy=cell-1-1]').contains('Adrian Burch');
    });

    it('Should sort by name descending', ()=>{
      cy.get('[data-cy=sort-by-name]').click();
      cy.get('[data-cy=cell-1-1]').contains('Zimmerman Barry');
    });
  });

  describe('B - Search after paginate', () => {
    before(()=>{
      cy.visit('http://localhost:8080/');
    });

    it('Should land on first page', ()=>{
      cy.get('[data-cy=cell-1-1]').contains('Stephens Townsend');
    });

    it('Should go to page 2', ()=>{
      cy.get('[data-cy=go-to-page-2]').click();
      cy.get('[data-cy=cell-1-1]').contains('Adrian Burch');
    });

    it('Should search for "Stephens Townsend"', ()=>{
      cy.get('[data-cy=search-input]').clear().type('Stephens Townsend');
      cy.get('[data-cy=cell-1-1]').contains('Stephens Townsend');
    });
  });

  describe('C - Sort after search', () => {
    before(()=>{
      cy.visit('http://localhost:8080/');
    });

    it('Should land on first page', ()=>{

    });

    it('Should search for "20"', ()=>{

    });

    it('Should sort by name ascending', ()=>{

    });
  });
});
