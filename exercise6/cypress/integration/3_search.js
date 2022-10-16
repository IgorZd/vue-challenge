
describe('3 - Search', () => {
  before(()=>{
    cy.visit('http://localhost:8080/');
  });

  it('Should land on first page', ()=>{
    cy.get('[data-cy=cell-1-1]').contains('Stephens Townsend');
  });

  it('Should search by full name', ()=>{
    cy.get('[data-cy=search-input]').clear().type('Debra Johns');
    cy.get('[data-cy=cell-1-1]').contains('Debra Johns');
  });

  it('Should search by name chunk', ()=>{
    cy.get('[data-cy=search-input]').clear().type('bra');
    cy.get('[data-cy=cell-1-1]').contains('Debra Johns');
  });

  it('Should search by name case-incensitive', ()=>{
    cy.get('[data-cy=search-input]').clear().type('joHNS');
    cy.get('[data-cy=cell-1-1]').contains('Debra Johns');
  });

  it('Should search by age', ()=>{
    cy.get('[data-cy=search-input]').clear().type('24');
    cy.get('[data-cy=cell-1-1]').contains('Lancaster Cabrera');
    cy.get('[data-cy=cell-2-1]').contains('Lacey Jefferson');
    cy.get('[data-cy=cell-3-1]').contains('Debra Johns');
    cy.get('[data-cy=cell-4-1]').contains('Mccarthy Copeland');
  });

  it('Should search by eye color', ()=>{
    cy.get('[data-cy=search-input]').clear().type('blue');
    cy.get('[data-cy=cell-1-1]').contains('Padilla Blair');
    cy.get('[data-cy=cell-10-1]').contains('Lester Miles');
  });

  it('Should search by gender', ()=>{
    cy.get('[data-cy=search-input]').clear().type('female');
    cy.get('[data-cy=cell-1-1]').contains('Aida Mccarty');
    cy.get('[data-cy=cell-10-1]').contains('Trisha Little');
  });
});
