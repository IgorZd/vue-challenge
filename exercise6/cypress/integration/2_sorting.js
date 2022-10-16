
describe('2 - Sorting', () => {
  before(()=>{
    cy.visit('http://localhost:8080/');
  });

  it('Should land on first page', ()=>{
    cy.get('[data-cy=cell-1-1]').contains('Stephens Townsend');
  });

  it('Should sort by name ascending', ()=>{
    cy.get('[data-cy=sort-by-name]').click();
    cy.get('[data-cy=cell-1-1]').contains('Adrian Burch');
  });

  it('Should sort by name descending', ()=>{
    cy.get('[data-cy=sort-by-name]').click();
    cy.get('[data-cy=cell-1-1]').contains('Zimmerman Barry');
  });

  it('Should reset sorting by name', ()=>{
    cy.get('[data-cy=sort-by-name]').click();
    cy.get('[data-cy=cell-1-1]').contains('Stephens Townsend');
  });

  it('Should sort by age ascending', ()=>{
    cy.get('[data-cy=sort-by-age]').click();
    cy.get('[data-cy=cell-1-2]').contains('20');
  });

  it('Should sort by age descending', ()=>{
    cy.get('[data-cy=sort-by-age]').click();
    cy.get('[data-cy=cell-1-2]').contains('40');
  });

  it('Should reset sorting by age', ()=>{
    cy.get('[data-cy=sort-by-age]').click();
    cy.get('[data-cy=cell-1-2]').contains('28');
  });

  it('Should sort by eye color ascending', ()=>{
    cy.get('[data-cy=sort-by-eyeColor]').click();
    cy.get('[data-cy=cell-1-3]').contains('blue');
  });

  it('Should sort by eye color descending', ()=>{
    cy.get('[data-cy=sort-by-eyeColor]').click();
    cy.get('[data-cy=cell-1-3]').contains('green');
  });

  it('Should reset sorting by eye color', ()=>{
    cy.get('[data-cy=sort-by-eyeColor]').click();
    cy.get('[data-cy=cell-1-3]').contains('brown');
  });

  it('Should sort by gender ascending', ()=>{
    cy.get('[data-cy=sort-by-gender]').click();
    cy.get('[data-cy=cell-1-4]').contains('female');
  });

  it('Should sort by gender descending', ()=>{
    cy.get('[data-cy=sort-by-gender]').click();
    cy.get('[data-cy=cell-1-4]').contains('male');
  });

  it('Should reset sorting by gender', ()=>{
    cy.get('[data-cy=sort-by-gender]').click();
    cy.get('[data-cy=cell-1-4]').contains('male');
  });
});
