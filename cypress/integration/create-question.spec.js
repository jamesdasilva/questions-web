describe("Questions", () => {
  beforeEach(() => {
    cy.request('POST', `http://localhost:9000/api/seed`);
    cy.wait(2000);
    cy.visit('http://localhost:8080/');
  })
  afterEach(() => {
    cy.request('DELETE', `http://localhost:9000/api/seed`);
    cy.wait(2000);
  })
  it("Uma nova pergunta deve ser exibida na lista quando uma pergunta for criada", () => {
    const newQuestionText = 'Esta é uma pergunta de teste! ' + new Date().getTime();
    cy.findByTestId('toAsk').type(newQuestionText);  
    cy.findByText('perguntar').click();
    cy.contains(newQuestionText).should('be.visible')  
  })
  it("Uma nova pergunta deve ter usuário 'anonmous' quando uma pergunta for criada sem identificação de usuário", () => {
    const newQuestionText = 'Esta é uma pergunta de teste! ' + new Date().getTime();
    cy.findByTestId('toAsk').type(newQuestionText);  
    cy.findByText('perguntar').click();
    cy.contains('anonymous').should('be.visible');
  })
  it("Uma nova pergunta deve exibir o nome do usuário identificado", () => {
    const newQuestionText = 'Esta é uma pergunta de teste! ' + new Date().getTime();
    const userText = 'user' + new Date().getTime();
    cy.findByTestId('user').type(userText);  
    cy.findByTestId('toAsk').type(newQuestionText);  
    cy.findByText('perguntar').click();
    cy.contains(userText).should('be.visible');
  })
})