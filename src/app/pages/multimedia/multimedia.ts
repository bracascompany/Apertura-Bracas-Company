import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-multimedia',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-[#010c06] text-white p-8 flex flex-col justify-between">
      <header class="flex justify-between items-center max-w-7xl mx-auto w-full">
        <a routerLink="/landing" class="text-[#00ff88] font-mono text-sm flex items-center gap-2 hover:underline cursor-pointer">
          &larr; Volver al Inicio
        </a>
        <span class="text-xs font-mono text-[#00ff88] bg-[#00ff88]/10 px-3 py-1 rounded-full border border-[#00ff88]/30">
          NODO BC // MULTIMEDIA
        </span>
      </header>

      <main class="max-w-4xl mx-auto text-center space-y-6 my-auto">
        <h1 class="text-4xl sm:text-5xl font-display font-bold text-white">Ecosistema Integrado Multimedia</h1>
        <p class="text-gray-400 text-base">Espacio dedicado a la conexión inteligente entre alimentos, streaming y desarrollo tecnológico de Bracas Company.</p>
        <div class="p-8 rounded-3xl border border-[#00ff88]/30 bg-[#010c06]/80 shadow-[0_0_30px_rgba(0,255,136,0.15)]">
          <p class="text-sm font-mono text-[#00ff88]">Módulo interactivo activo y sincronizado correctamente.</p>
        </div>
      </main>

      <footer class="text-center text-xs text-gray-500 font-mono">
        Bracas Company &copy; 2026 - Todos los derechos reservados
      </footer>
    </div>
  `
})
export class MultimediaComponent {}
