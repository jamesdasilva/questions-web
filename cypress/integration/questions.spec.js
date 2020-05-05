describe("Questions", () => {
  let idQuestion;
  beforeEach(() => {
    cy.request('POST', `http://localhost:9000/api/seed`);
    cy.wait(2000);
    cy.visit('http://localhost:8080/');
  })
  afterEach(() => {
    cy.request('DELETE', `http://localhost:9000/api/seed`);
  })
  it("Uma nova pergunta deve ser exibida na lista quando uma pergunta for criada", () => {
    cy.findByTestId('toAsk').type('Esta é uma pergunta de teste!');  
    cy.findByText('perguntar').click();
  })
})