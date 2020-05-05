describe("Answers", () => {
  beforeEach(() => {
    cy.request('POST', `http://localhost:9000/api/seed`, {}).then((resp) => {
      cy.visit(`http://localhost:8080`);
    });
    cy.wait(2000);
  });
  afterEach(() => {
    cy.request('DELETE', `http://localhost:9000/api/seed`);
    cy.wait(2000);
  });
  it("Uma nova resposta deve ser exibida na lista quando uma resposta for criada", () => {
    cy.findAllByText('responder').first().click();
    cy.wait(500);
    const newAnswerText = 'Esta é uma resposta de teste! ' + new Date().getTime();
    cy.findByTestId('toReply').type(newAnswerText);
    cy.findAllByText('responder').first().click();
    cy.contains(newAnswerText).should('be.visible');
  });
  it("Uma nova resposta deve ter usuário 'anonmous' quando uma resposta for criada sem identificação de usuário", () => {
    cy.findAllByText('responder').first().click();
    cy.wait(500);
    const newAnswerText = 'Esta é uma resposta de teste! ' + new Date().getTime();
    cy.findByTestId('toReply').type(newAnswerText);
    cy.findByText('responder').click();
    cy.contains('anonymous').should('be.visible');
  });
  it("Uma nova resposta deve exibir o nome do usuário identificado", () => {
    cy.findAllByText('responder').first().click();
    cy.wait(500);
    const newAnswerText = 'Esta é uma resposta de teste! ' + new Date().getTime();
    const userText = 'user' + new Date().getTime();
    cy.findByTestId('user').type(userText);
    cy.findByTestId('toReply').type(newAnswerText);
    cy.findByText('responder').click();
    cy.contains(userText).should('be.visible');
  });
});