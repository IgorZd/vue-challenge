
describe('1 - Pagination', () => {
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

  it('Should go to page 3', ()=>{
    cy.get('[data-cy=go-to-page-3]').click();
    cy.get('[data-cy=cell-1-1]').contains('Lacey Jefferson');
  });

  it('Should go to page 4', ()=>{
    cy.get('[data-cy=go-to-page-4]').click();
    cy.get('[data-cy=cell-1-1]').contains('Lester Miles');
  });

  it('Should go to page 5', ()=>{
    cy.get('[data-cy=go-to-page-5]').click();
    cy.get('[data-cy=cell-1-1]').contains('Patrica Ballard');
  });

  it('Should go to previous page', ()=>{
    cy.get('[data-cy=go-to-previous-page]').click();
    cy.get('[data-cy=cell-1-1]').contains('Lester Miles');
  });

  it('Should go to next page', ()=>{
    cy.get('[data-cy=go-to-next-page]').click();
    cy.get('[data-cy=cell-1-1]').contains('Patrica Ballard');
  });
});
