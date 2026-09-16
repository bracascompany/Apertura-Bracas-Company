import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-soluciones',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './soluciones.html',
  styleUrls: ['./soluciones.scss']
})
export class SolucionesComponent {
  selectedPackage: any = null;

  packagesData: { [key: string]: any } = {
    'BASIC': {
      title: 'SMART BASIC',
      subtitle: 'HARDWARE + INSTALACIÓN BÁSICA + CONFIGURACIÓN',
      description: 'Ideal para iniciativas iniciales que requieren una base sólida, rápida y funcional sin complicaciones.',
      features: [
        'Hardware esencial de alta durabilidad',
        'Instalación básica asistida',
        'Configuración inicial de parámetros operativos',
        'Soporte técnico por tickets'
      ]
    },
    'PLUS': {
      title: 'SMART PLUS',
      subtitle: 'HARDWARE + SOFTWARE + CONFIGURACIÓN + CAPACITACIÓN',
      description: 'Una solución equilibrada que integra software especializado y capacitación completa para potenciar tu equipo.',
      features: [
        'Hardware de nivel avanzado',
        'Licenciamiento y despliegue de software',
        'Configuración personalizada de flujos',
        'Capacitación integral al personal'
      ]
    },
    'PRO': {
      title: 'SMART PRO',
      subtitle: 'HARDWARE + SOFTWARE + INTEGRACIÓN + DASHBOARD + SOPORTE',
      description: 'Diseñado para operaciones de alto rendimiento con analítica en tiempo real y conectividad avanzada.',
      features: [
        'Hardware robusto de alto rendimiento',
        'Software con integración API',
        'Dashboard de control en tiempo real',
        'Soporte técnico prioritario'
      ]
    },
    'ENTERPRISE': {
      title: 'SMART ENTERPRISE',
      subtitle: 'Ecosistema completo a la medida para corporaciones',
      description: 'Solución corporativa integral y escalable con atención dedicada 24/7 y analítica predictiva.',
      features: [
        'Infraestructura Hardware Enterprise dedicada',
        'Desarrollo de software a la medida',
        'Integración ilimitada con sistemas existentes',
        'Analítica predictiva y soporte 24/7'
      ]
    }
  };

  openModal(pkgKey: string) {
    this.selectedPackage = this.packagesData[pkgKey];
  }

  closeModal() {
    this.selectedPackage = null;
  }
}
