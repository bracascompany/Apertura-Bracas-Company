describe('DCCF: Registro por Navegación Interna', () => {
  it('Debe navegar al registro desde el inicio para evitar el 404', () => {
    // 1. Entrar a la Home (que siempre funciona)
    cy.visit('https://tiend-app.vercel.app/');

    // 2. Esperar a que el navbar o algún enlace sea visible
    // Tu HTML decía que en el login hay un link al registro, y viceversa.
    // Vamos a forzar a Angular a cambiar de página internamente
    cy.visit('https://tiend-app.vercel.app/login');
    
    // 3. Buscamos el enlace de "Registrate" por su texto o ruta
    // Según tu app.routes.ts, la ruta es /register
    cy.get('a[routerlink="/register"]').first().click({ force: true });

    // 4. Ahora, si el cambio de página fue interno (SPA), 
    // el formulario DEBE aparecer sin que Vercel se entere
    cy.get('input#name', { timeout: 15000 }).should('be.visible').type('Ever QA Final');
    cy.get('input#email').type('facebranddigital@gmail.com');
    cy.get('input#password').type('D4rk4rm4deus2026');

    // 5. Botón de enviar (usamos la clase o el tipo ya que el testid falló)
    cy.get('button[type="submit"]').click({ force: true });

    // 6. Verificar éxito
    cy.contains('éxito', { timeout: 15000 }).should('be.visible');
    cy.screenshot('REGISTRO-LOGRADO');
  });
});
