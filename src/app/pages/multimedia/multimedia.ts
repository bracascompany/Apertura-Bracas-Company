import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-multimedia',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-[#010c06] text-white p-8 flex flex-col justify-between">
      <!-- Header -->
      <header class="flex justify-between items-center max-w-7xl mx-auto w-full">
        <a routerLink="/landing" class="text-[#00ff88] font-mono text-sm flex items-center gap-2 hover:underline cursor-pointer">
          &larr; Volver al Inicio
        </a>
        <span class="text-xs font-mono text-[#00ff88] bg-[#00ff88]/10 px-3 py-1 rounded-full border border-[#00ff88]/30">
          NODO BC // MULTIMEDIA
        </span>
      </header>

      <!-- Main Content -->
      <main class="max-w-5xl mx-auto w-full space-y-12 my-12">
        <!-- Hero Section -->
        <div class="text-center space-y-4">
          <h1 class="text-4xl sm:text-5xl font-display font-bold text-white">Ecosistema Integrado Multimedia</h1>
          <p class="text-gray-400 text-base max-w-2xl mx-auto">Espacio dedicado a la conexión inteligente entre alimentos, streaming y desarrollo tecnológico de Bracas Company.</p>
        </div>

        <!-- Carrusel de Imágenes (Slider) -->
        <div class="relative overflow-hidden rounded-3xl border border-[#00ff88]/30 bg-[#010c06]/80 shadow-[0_0_30px_rgba(0,255,136,0.15)]">
          <div class="relative h-80 sm:h-96 w-full">
            <img [src]="slides[currentSlide].url" [alt]="slides[currentSlide].title" class="w-full h-full object-cover transition-all duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-[#010c06] via-transparent to-transparent flex items-end p-6">
              <span class="text-xs font-mono text-[#00ff88] bg-[#00ff88]/10 px-3 py-1 rounded-full border border-[#00ff88]/30 mb-2 block">
                {{ slides[currentSlide].title }}
              </span>
            </div>
          </div>
          <!-- Controles del Carrusel -->
          <button (click)="prevSlide()" class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#00ff88] hover:text-black text-[#00ff88] border border-[#00ff88]/30 p-3 rounded-full transition cursor-pointer">❮</button>
          <button (click)="nextSlide()" class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#00ff88] hover:text-black text-[#00ff88] border border-[#00ff88]/30 p-3 rounded-full transition cursor-pointer">❯</button>
        </div>
<!-- Video Institucional / Formato Vertical (Estilo TikTok / Shorts) -->
        <div class="space-y-4 flex flex-col items-center">
          <h2 class="text-xl font-mono text-[#00ff88] text-center">INFRAESTRUCTURA EN ACCIÓN // SHORTS</h2>
          
          <!-- Contenedor vertical estilo TikTok -->
          <div class="relative w-full max-w-xs h-[550px] rounded-3xl overflow-hidden border border-[#00ff88]/30 bg-[#010c06]/80 shadow-[0_0_30px_rgba(0,255,136,0.15)]">
            <iframe 
              class="w-full h-full object-cover border-0 scale-125"
              src="https://www.youtube.com/embed/cDP26LVva3g?autoplay=1&mute=1&loop=1&playlist=cDP26LVva3g&controls=0&showinfo=0&modestbranding=1" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </div>

        <!-- Estado del Módulo -->
        <div class="p-8 rounded-3xl border border-[#00ff88]/30 bg-[#010c06]/80 shadow-[0_0_30px_rgba(0,255,136,0.15)] text-center">
          <p class="text-sm font-mono text-[#00ff88]">Módulo interactivo activo y sincronizado correctamente.</p>
        </div>
      </main>

      <!-- Footer -->
      <footer class="text-center text-xs text-gray-500 font-mono">
        Bracas Company &copy; 2026 - Todos los derechos reservados
      </footer>
    </div>
  `
})
export class MultimediaComponent {
  slides = [
    { url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80', title: 'Innovación Tecnológica' },
    { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80', title: 'Infraestructura Global' },
    { url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80', title: 'Ecosistema Digital Bracas' }
  ];
  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}