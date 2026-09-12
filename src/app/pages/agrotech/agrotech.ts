import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agrotech',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-950 text-white p-8">
      <div class="max-w-7xl mx-auto space-y-8">
        <div class="flex items-center justify-between border-b border-brand-500/20 pb-6">
          <div class="space-y-2">
            <span class="px-3 py-1 text-xs font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/30 rounded-full">
              AgroTech & Alimentos
            </span>
            <h1 class="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              Trazabilidad y Sostenibilidad Agroindustrial
            </h1>
            <p class="text-gray-400 text-sm max-w-2xl">
              Optimización avanzada de la cadena de valor alimentaria con control de procesos de alta precisión y estándares internacionales.
            </p>
          </div>
          <a routerLink="/" class="px-4 py-2 bg-slate-900 border border-slate-700 hover:border-brand-500/50 text-gray-300 hover:text-white rounded-xl text-sm transition-all flex items-center gap-2">
            <i class="fa-solid fa-arrow-left"></i> Volver al Inicio
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="glass-card p-6 rounded-2xl border border-brand-500/20 bg-slate-900/50 space-y-3">
            <div class="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 text-lg">
              <i class="fa-solid fa-seedling"></i>
            </div>
            <h3 class="text-lg font-bold text-white">Cadena de Suministro</h3>
            <p class="text-xs text-gray-400 leading-relaxed">Monitoreo en tiempo real desde la cosecha hasta el empaque final.</p>
          </div>

          <div class="glass-card p-6 rounded-2xl border border-brand-500/20 bg-slate-900/50 space-y-3">
            <div class="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 text-lg">
              <i class="fa-solid fa-chart-line"></i>
            </div>
            <h3 class="text-lg font-bold text-white">Métricas de Calidad</h3>
            <p class="text-xs text-gray-400 leading-relaxed">Indicadores de rendimiento y cumplimiento normativo automatizados.</p>
          </div>

          <div class="glass-card p-6 rounded-2xl border border-brand-500/20 bg-slate-900/50 space-y-3">
            <div class="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 text-lg">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <h3 class="text-lg font-bold text-white">Seguridad Alimentaria</h3>
            <p class="text-xs text-gray-400 leading-relaxed">Protocolos estrictos de trazabilidad y control de riesgos operativos.</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AgrotechComponent {}
