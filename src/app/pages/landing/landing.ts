import { Component, AfterViewInit, Inject, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService, Product } from '../../services/cart.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class LandingComponent implements AfterViewInit {
    ngAfterViewInit() {
    // PARALLAX NATIVO OPTIMIZADO PARA LOGOS CIRCULARES
    const cards = document.querySelectorAll(".product-card");
    
    if (cards.length > 0 && typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        window.requestAnimationFrame(() => {
          cards.forEach(card => {
            const img = card.querySelector("img");
            if (!img) return;

            const rect = card.getBoundingClientRect();
            const viewHeight = window.innerHeight;

            // Validamos si la esfera está visible en la pantalla del celular
            if (rect.top < viewHeight && rect.bottom > 0) {
              // Calculamos el porcentaje de desplazamiento del elemento en pantalla
              const relativeY = rect.top + rect.height / 2;
              const screenCenter = viewHeight / 2;
              const diff = relativeY - screenCenter;

              // Movemos la imagen sutilmente en el eje Y inverso (efecto profundidad)
              // Multiplicador 0.15 controla la velocidad del efecto
              const translateY = diff * 0.15; 

              // Aplicamos un ligero zoom base (scale 1.2) para tener margen de movimiento sin dejar bordes vacíos
              img.style.transform = `scale(1.2) translateY(${translateY}px)`;
              img.style.transition = "transform 0.1s ease-out";
            }
          });
        });
      }, { passive: true });
    }
  }

  public cartService = inject(CartService);
  private router = inject(Router);

  // Redirige a la vista ambiental de la Fundación SEGAT
  goToSegatPage() {
    this.router.navigate(['/fundacion-segat']);
  }

  goToBracasfood() {
    window.location.href = "https://bracasfood.vercel.app/";
  }

  goToFaceBrand() {
    this.router.navigate(["/facebrand-digital"]);
  }

  showModal = signal(false);
  showRegisterModal = signal(false);

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9+ ]*$')])
  });

  onAddToCart(name: string, price: number, category: string, imageUrl: string) {
    const product: Product = {
      name,
      price,
      category,
      imageUrl,
      description: 'Producto destacado de la colección TIEND.',
      stock: 10
    };
    this.cartService.addToCart(product);
  }

  toggleModal() {
    this.showModal.update((v: boolean) => !v);
  }

  toggleRegisterModal() {
    if (!this.showRegisterModal()) {
      this.registerForm.reset();
    }
    this.showRegisterModal.update((v: boolean) => !v);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
      this.toggleRegisterModal();
      alert('¡Registro exitoso! Bienvenido a TIEND.');
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
