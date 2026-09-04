file_path = "src/app/pages/landing/landing.html"
with open(file_path, "r") as f:
    content = f.read()

# Buscar el bloque de bracasfood y actualizar el contenedor para que tenga (click)="goToBracasfood()"
# Vamos a reemplazar la tarjeta para que invoque goToBracasfood() al hacerle clic
old_block = """      <!-- Bracasfood / Brades -->
      <div class="product-card" (click)="goToBrades()">
         <div class="product-image">
          <img src="assets/log2.jpeg" alt="Bracasfood" />
         </div>
         <div class="product-info">
          <h3>Bracasfood</h3>
          <p class="price">Servicios de Comidas</p>
          <div class="card-actions">
            <button class="add-btn" (click)="$event.stopPropagation(); onAddToCart('Bracasfood', 0, 'Bracasfood', 'log2.jpeg')">"""

# Verificamos si existe un bloque similar y lo adaptamos, o podemos hacerlo mediante una directiva (click)="goToBracasfood()"
print("Listo para actualizar el HTML del landing para Bracasfood.")
