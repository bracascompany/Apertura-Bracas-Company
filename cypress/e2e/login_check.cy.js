describe('DCCF: Validación de Acceso', () => {
  it('Debe cargar el login y permitir interacción', () => {
    // Usamos failOnStatusCode para que el robot no muera si Vercel se pone terco
    cy.visit('https://tiend-app.vercel.app/auth/login', { failOnStatusCode: false });

    // Esperamos a que el campo sea visible (esto ayuda en brXeon)
    cy.get('[data-testid="login-email"]', { timeout: 10000 })
      .should('be.visible')
      .type('facebranddigital@gmail.com');

    cy.get('[data-testid="login-password"]')
      .type('D4rk4rm4deus2026');

    cy.get('[data-testid="login-submit"]')
      .should('not.be.disabled')
      .click();

    cy.log('✅ Intento de login completado');
  });
});
