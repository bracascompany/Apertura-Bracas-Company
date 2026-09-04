import re

with open('src/app/pages/landing/landing.html', 'r') as f:
    content = f.read()

# Definimos la nueva sección moderna de casos de éxito en formato carrusel
new_cases_section = """  <div class="promo-banner success-header">
    <h2 class="success-title">
      Casos de éxito <span class="dots"><span>.</span><span>.</span><span>.</span></span>
    </h2>
  </div>

  <section class="featured-products success-carousel-section">
    <div class="section-header"></div>
    <div class="product-grid horizontal-scroll-grid">
      
      <!-- 1. Bracasfood -->
      <div class="product-card success-card-animated" (click)="goToBracasfood()" style="cursor: pointer">
        <div class="product-image">
          <img src="assets/log2.jpeg" alt="Bracasfood" />
        </div>
        <div class="product-info">
          <h3>Bracasfood</h3>
          <p class="case-desc">¡Tu paladar, nuestra prioridad!</p>
          <div class="price-row">
            <span class="price"></span>
            <button
              class="add-btn"
              (click)="
                $event.stopPropagation(); onAddToCart('Bracasfood', 0000, 'Bracasfood', 'log2.jpeg')
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- 2. Brades -->
      <div class="product-card success-card-animated">
        <div class="product-image">
          <img src="assets/log3.jpeg" alt="Brades" />
        </div>
        <div class="product-info">
          <h3>Brades</h3>
          <p class="case-desc">Confecciones de calidad y estilo.</p>
          <div class="price-row">
            <span class="price"></span>
            <button
              class="add-btn"
              (click)="onAddToCart('Brades', 0000, 'Brades', 'assets/Brades.jpeg')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- 3. Bracastyles -->
      <div class="product-card success-card-animated">
        <div class="product-image">
          <img src="assets/log4.jpeg" alt="Bracastyles" />
        </div>
        <div class="product-info">
          <h3>Bracastyles</h3>
          <p class="case-desc">Moda vanguardista y tendencias.</p>
          <div class="price-row">
            <span class="price"></span>
            <button
              class="add-btn"
              (click)="onAddToCart('Bracastyles', 0000, 'Bracastyles', 'assets/Bracastyles.jpeg')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- 4. Cont&Markets[JB]_Studios -->
      <div class="product-card success-card-animated">
        <div class="product-image">
          <img src="assets/log5.jpeg" alt="Cont&Markets[JB]_Studios" />
        </div>
        <div class="product-info">
          <h3>Cont&Markets[JB]_Studios</h3>
          <p class="case-desc">Soluciones estratégicas digitales.</p>
          <div class="price-row">
            <span class="price"></span>
            <button
              class="add-btn"
              (click)="
                onAddToCart(
                  'Cont&Markets[JB]_Studios',
                  0000,
                  'Cont&Markets[JB]_Studios',
                  'assets/Cont&Markets[JB]_Studios.jpeg'
                )
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- 5. FundaciónSEGAT -->
      <div class="product-card success-card-animated">
        <div class="product-image" (click)="goToSegatPage()" style="cursor: pointer">
          <img src="assets/log6.jpeg" alt="FundaciónSEGAT" />
        </div>
        <div class="product-info">
          <h3>FundaciónSEGAT</h3>
          <p class="case-desc">Innovación, Sostenibilidad y Tecnología.</p>
          <div class="price-row">
            <span class="price"></span>
            <button
              class="add-btn"
              (click)="
                onAddToCart('FundaciónSEGAT', 0, 'FundaciónSEGAT', 'assets/FundaciónSEGAT.jpeg')
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- 6. Face Brand Digital -->
      <div class="product-card success-card-animated">
        <div class="product-image">
          <img src="assets/facebranddigitallogo.jpg" alt="FaceBrand Digital" />
        </div>
        <div class="product-info">
          <h3>Face Brand Digital</h3>
          <p class="case-desc">Transformación digital de impacto.</p>
          <div class="price-row">
            <span class="price"></span>
            <button
              class="add-btn"
              (click)="
                onAddToCart(
                  'Face Brand Digital',
                  0,
                  'FaceBrand Digital',
                  'assets/facebranddigitallogo.jpg'
                )
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>"""

# Buscamos el bloque actual de éxito y lo reemplazamos
pattern = r'  <div class="promo-banner success-header">.*?<\/section>\s*<\/div>'
updated_content, count = re.subn(pattern, new_cases_section, content, flags=re.DOTALL)

if count > 0:
    with open('src/app/pages/landing/landing.html', 'w') as f:
        f.write(updated_content)
    print("¡Se actualizó con éxito la sección de Casos de Éxito en landing.html!")
else:
    print("No se pudo encontrar el patrón exacto, realizando reemplazo alternativo...")
    # Patrón alternativo más amplio si es necesario
    start_idx = content.find('Casos de éxito')
    if start_idx != -1:
        print("Encontrado 'Casos de éxito', pero se requiere ajuste manual o patrón específico.")
