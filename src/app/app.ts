import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
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
    <!-- PANTALLA DE CARGA CON CIRCUITO NEÓN Y CÍRCULO DIFUMINADO -->
    <div *ngIf="isLoading" class="fixed inset-0 z-50 bg-[#010c06] flex flex-col items-center justify-center overflow-hidden font-sans transition-opacity duration-700">
      
      <!-- EFECTO DE CIRCUITO NEÓN DE FONDO -->
      <div class="fixed inset-0 pointer-events-none z-0">
        <canvas #heroCircuitCanvas class="w-full h-full block"></canvas>
        <div class="absolute inset-0 bg-gradient-to-r from-[#010c06] via-[#010c06]/85 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#010c06] via-transparent to-[#010c06]/60"></div>
      </div>

      <!-- Resplandor ambiental central -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.15)_0%,transparent_70%)] pointer-events-none z-10"></div>

      <!-- Contenedor central -->
      <div class="relative flex items-center justify-center w-36 h-36 z-20">
        
        <!-- Círculo de carga fluido girando alrededor -->
        <div class="absolute inset-0 rounded-full border-[3px] border-emerald-500/10 border-t-emerald-400 border-r-emerald-400/60 animate-spin shadow-[0_0_25px_rgba(0,255,136,0.4)]"></div>
        
        <!-- Círculo difuminado interno -->
        <div class="absolute w-24 h-24 rounded-full bg-[radial-gradient(circle,rgba(2,30,15,0.9)_0%,rgba(1,12,6,0.4)_70%,transparent_100%)] blur-sm"></div>

        <!-- Imagen del chatbot con su efecto translúcido -->
        <div class="absolute inset-0 flex items-center justify-center p-6 z-30">
          <img src="assets/loading.png" alt="Bracas Company Bot" class="w-20 h-20 sm:w-24 sm:h-24 object-cover mix-blend-screen opacity-95 hover:opacity-100 transition-opacity">
        </div>
      </div>

      <!-- Texto inferior y barra de progreso -->
      <div class="mt-6 text-center z-20">
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
export class App implements OnInit, AfterViewInit, OnDestroy {
  isLoading = true;

  @ViewChild('heroCircuitCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private animationFrameId: number = 0;
  private particles: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000); // Súbele a 2.5 segundos para que luzca el canvas de carga

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

  ngAfterViewInit() {
    this.initCanvas();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeCanvas);
    cancelAnimationFrame(this.animationFrameId);
  }

  private initCanvas() {
    if (!this.canvasRef) return;
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
    this.initParticles();
    this.animate();

    window.addEventListener('resize', this.resizeCanvas);
  }

  private resizeCanvas = () => {
    if (!this.canvasRef) return;
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private initParticles() {
    this.particles = [];
    const numParticles = Math.floor(window.innerWidth / 35);
    for (let i = 0; i < numParticles; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1
      });
    }
  }

  private animate = () => {
    if (!this.canvasRef || !this.ctx) return;
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.ctx.fillStyle = 'rgba(0, 255, 136, 0.85)';
    this.ctx.strokeStyle = 'rgba(0, 255, 136, 0.15)';
    this.ctx.lineWidth = 1;

    for (let i = 0; i < this.particles.length; i++) {
      let p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      // DIBUJAR ROMBOS EN LUGAR DE CÍRCULOS
      const size = p.radius * 2.2;
      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(Math.PI / 4); // Rota 45 grados para formar el rombo
      this.ctx.fillRect(-size / 2, -size / 2, size, size);
      this.ctx.restore();

      // Líneas de conexión entre nodos cercanos
      for (let j = i + 1; j < this.particles.length; j++) {
        let p2 = this.particles[j];
        let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 130) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
  }
}