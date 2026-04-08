describe('Misión: Tiend-App Status Check', () => {
  it('Debe cargar la página principal', () => {
    // Usamos la URL que vimos en tus logs anteriores
    cy.visit('https://tiend-app.vercel.app'); 
    
    // Verificamos que el body exista
    cy.get('body').should('be.visible');
    cy.log('✅ ¡Página cargada con éxito en brXeon!');
  });
});
