describe("Teste do formulário", () => {
  it("Verifica preenchimento do campo de email", () => {
    cy.visit("http://localhost:5173/"); // Ajuste o endereço conforme necessário

    const email = "test@example.com"; // Exemplo de email válido

    cy.get('input[type="email"]').type(email);

    cy.get('input[type="email"]').should("have.value", email);
  });

  it("Verifica preenchimento do campo de senha com senha forte", () => {
    cy.visit("http://localhost:5173/"); // Ajuste o endereço conforme necessário

    const senha = "StrongPassword123!"; // Exemplo de senha forte

    cy.get('input[type="password"]').type(senha);

    cy.get('input[type="password"]').should("have.value", senha);
  });

  it("Verifica o envio dos valores dos inputs", () => {
    cy.visit("http://localhost:5173/"); // Ajuste o endereço conforme necessário

    const email = "test@example.com"; // Exemplo de email válido
    const senha = "StrongPassword123!"; // Exemplo de senha forte

    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(senha);

    cy.get('button[type="submit"]').click();

    // Adicione aqui as verificações adicionais para o envio dos valores dos inputs
  });
});
