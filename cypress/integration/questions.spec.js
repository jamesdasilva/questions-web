describe("Questions", () => {
  let idQuestion;
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  })
  afterEach(() => {
    // const id = '5eaf0f991e051901a29e39b8';
    // cy.request('DELETE', `http://localhost:9000/questions/${id}`);
  })
  it("Uma nova pergunta deve ser exibida na lista quando uma pergunta for criada", () => {
    cy.findByTestId('toAsk').type('Esta é uma pergunta de teste!');  
    cy.findByText('perguntar').click();
  })
})