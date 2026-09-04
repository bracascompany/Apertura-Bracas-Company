with open('src/app/pages/landing/landing.scss', 'r') as f:
    content = f.read()

# Reemplazamos los estilos del success-header para reducir el tamaño y quitar fondos blancos si los hubiera
target_block = """/* --- EFECTOS ESPECIALES PARA EL TÍTULO "CASOS DE ÉXITO" --- */

.success-header {
  text-align: center;
  padding: 40px 0;
  
  .success-title {
    font-size: 3.5rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    display: inline-block;
    
    /* Degradado animado estilo "Bracas Company" */
    background: linear-gradient(90deg, #5CCB5F, #9b59b6, #3498db, #5CCB5F);
    background-size: 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine-text 5s linear infinite;
    
    /* Movimiento sutil de flotación */
    animation: float-text 3s ease-in-out infinite, shine-text 5s linear infinite;
    
    cursor: default;
    transition: transform 0.3s ease;
  }

  .success-title:hover {
    transform: scale(1.05);
  }
}"""

replacement_block = """/* --- EFECTOS ESPECIALES PARA EL TÍTULO "CASOS DE ÉXITO" (REDUCIDO Y SIN FONDO) --- */

.promo-banner.success-header {
  background: transparent !important;
  box-shadow: none !important;
  border: none !important;
  padding: 15px 0 !important;
  margin: 0 !important;
  text-align: center;
  
  .success-title {
    font-size: 2rem !important; /* Tamaño más compacto y equilibrado */
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    display: inline-block;
    background: linear-gradient(90deg, #5CCB5F, #9b59b6, #3498db, #5CCB5F);
    background-size: 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: float-text 3s ease-in-out infinite, shine-text 5s linear infinite;
    cursor: default;
    transition: transform 0.3s ease;
    margin-bottom: 5px !important;
  }

  .success-title:hover {
    transform: scale(1.03);
  }

  .dots {
    display: inline-block;
    margin-left: 4px;
    span {
      font-size: 1.5rem;
    }
  }
}"""

if target_block in content:
    content = content.replace(target_block, replacement_block)
    with open('src/app/pages/landing/landing.scss', 'w') as f:
        f.write(content)
    print("¡Se actualizó el tamaño y se eliminó el fondo correctamente!")
else:
    # Añadimos al final si no se encontró el bloque exacto
    with open('src/app/pages/landing/landing.scss', 'a') as f:
        f.write("\n" + replacement_block)
    print("Se agregaron los nuevos estilos compactos al final del archivo.")
