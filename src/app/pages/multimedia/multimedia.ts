import { Component, OnInit, OnDestroy } from '@angular/core';
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
        <div class="text-center space-y-3">
          <h1 class="text-4xl sm:text-5xl font-display font-bold text-[#00ff88] uppercase tracking-wider">
            Ecosistema Integrado Multimedia
          </h1>
          <p class="text-xs sm:text-sm font-mono text-[#00ff88]/80 tracking-widest uppercase">
            Brazo de tecnología, streaming e innovación de Bracas Company
          </p>
        </div>

        <!-- Carrusel de Imágenes (Slider) con indicador visual y transición fluida -->
        <div class="relative overflow-hidden rounded-3xl border border-[#00ff88]/30 bg-[#010c06]/80 shadow-[0_0_30px_rgba(0,255,136,0.15)]"
             (mouseenter)="stopAutoPlay()" 
             (mouseleave)="startAutoPlay()">
          
          <div class="relative h-80 sm:h-96 w-full">
            <img [src]="slides[currentSlide].url" [alt]="slides[currentSlide].title" 
                 class="w-full h-full object-cover transition-opacity duration-700 ease-in-out">
            
            <div class="absolute inset-0 bg-gradient-to-t from-[#010c06] via-transparent to-transparent flex items-end p-6 justify-between items-end">
              <span class="text-xs font-mono text-[#00ff88] bg-[#00ff88]/10 px-3 py-1 rounded-full border border-[#00ff88]/30 block">
                {{ slides[currentSlide].title }}
              </span>
              
              <!-- Indicadores de puntos (Dots) para ver el progreso -->
              <div class="flex gap-2 mb-1">
                <button *ngFor="let slide of slides; let i = index" 
                        (click)="goToSlide(i)"
                        [class.bg-[#00ff88]]="currentSlide === i"
                        [class.bg-[#00ff88]/30]="currentSlide !== i"
                        class="w-3 h-3 rounded-full transition-all duration-300 cursor-pointer">
                </button>
              </div>
            </div>
          </div>

          <!-- Controles del Carrusel -->
          <button (click)="prevSlide()" class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#00ff88] hover:text-black text-[#00ff88] border border-[#00ff88]/30 p-3 rounded-full transition cursor-pointer z-10">❮</button>
          <button (click)="nextSlide()" class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#00ff88] hover:text-black text-[#00ff88] border border-[#00ff88]/30 p-3 rounded-full transition cursor-pointer z-10">❯</button>
        </div>

        <!-- Video Institucional / Formato Vertical (Estilo TikTok / Shorts) -->
        <div class="space-y-4 flex flex-col items-center">
          <h2 class="text-xl font-mono text-[#00ff88] text-center">INFRAESTRUCTURA EN ACCIÓN</h2>
          
          <div class="relative w-full max-w-xs h-[550px] rounded-3xl overflow-hidden border border-[#00ff88]/30 bg-[#010c06]/80 shadow-[0_0_30px_rgba(0,255,136,0.15)]">
            <video 
              class="w-full h-full object-cover border-0 scale-125"
              src="assets/video.mp4"
              autoplay 
              loop 
              playsinline>
              Tu navegador no soporta la reproducción de video.
            </video>
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
export class MultimediaComponent implements OnInit, OnDestroy {
  slides = [
    { url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80', title: 'Innovación Tecnológica' },
    { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80', title: 'Infraestructura Global' },
    { url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80', title: 'Ecosistema Digital Bracas' }
  ];
  currentSlide = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  // Método para saltar directamente a una imagen mediante los puntos indicadores
  goToSlide(index: number) {
    this.currentSlide = index;
    // Reiniciamos el temporizador al hacer clic manualmente para que no salte de inmediato
    this.startAutoPlay();
  }

  startAutoPlay() {
    this.stopAutoPlay(); 
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 1000); // Reducido a 2.8 segundos para que sea más dinámico
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}