import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { BracasCompanyBotComponent } from './components/bracas-company-bot/bracas-company-bot';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, BracasCompanyBotComponent],
  template: `
    <!-- PANTALLA DE CARGA CON CÍRCULO DIFUMINADO NEGRO-VERDE -->
    <div *ngIf="isLoading" class="fixed inset-0 z-50 bg-[#010c06]/95 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.12)_0%,transparent_70%)] pointer-events-none"></div>

      <!-- Contenedor central -->
      <div class="relative flex items-center justify-center w-36 h-36">
        
        <!-- Círculo de carga fluido estilo Motorola girando alrededor -->
        <div class="absolute inset-0 rounded-full border-[3px] border-emerald-500/10 border-t-emerald-400 border-r-emerald-400/60 animate-spin shadow-[0_0_25px_rgba(0,255,136,0.4)]"></div>
        
        <!-- Círculo difuminado interno (negro verdoso fundiéndose hacia la imagen) -->
        <div class="absolute w-24 h-24 rounded-full bg-[radial-gradient(circle,rgba(2,30,15,0.9)_0%,rgba(1,12,6,0.4)_70%,transparent_100%)] blur-sm"></div>

        <!-- Imagen del chatbot con su efecto translúcido exacto -->
        <div class="absolute inset-0 flex items-center justify-center p-6 z-10">
          <img src="assets/loading.png" alt="Bracas Company Bot" class="w-20 h-20 sm:w-24 sm:h-24 object-cover mix-blend-screen opacity-95 hover:opacity-100 transition-opacity">
        </div>
      </div>

      <!-- Texto inferior y barra de progreso -->
      <div class="mt-6 text-center z-10">
        <p class="text-[11px] text-emerald-400/80 tracking-[0.3em] uppercase mb-4 animate-pulse">
          INICIALIZANDO ECOSYSTEM...
        </p>
        <div class="w-36 h-1 bg-emerald-950/80 rounded-full mx-auto overflow-hidden border border-emerald-500/20">
          <div class="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 animate-loadingBar shadow-[0_0_8px_rgba(0,255,136,0.8)]"></div>
        </div>
      </div>
    </div>

    <!-- VISTA PRINCIPAL DE LA APLICACIÓN -->
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    <app-bracas-company-bot></app-bracas-company-bot>
  `
})
export class App implements OnInit {
  isLoading = true;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if (event.urlAfterRedirects === '/' || event.urlAfterRedirects === '') {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      }
    });
  }
}