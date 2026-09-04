import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent implements OnInit {
  isLandingPage = false;
  isSegatRoute = false;
  isStylesRoute = false;
  isBradesRoute = false;
  isCmRoute = false;
  isFbdRoute = false;
  isFacebrandGeneralRoute = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkRoute(this.router.url);

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkRoute(event.urlAfterRedirects);
    });
  }

  private checkRoute(url: string): void {
    // Normalizamos la URL por si tiene parámetros o barras al final
    const cleanUrl = url.split('?')[0].toLowerCase();

    this.isSegatRoute = cleanUrl.includes('/segat') || cleanUrl.includes('fundacion-segat');
    this.isStylesRoute = cleanUrl.includes('/bracas-styles') || cleanUrl.includes('/styles');
    this.isBradesRoute = cleanUrl.includes('/brades');
    this.isCmRoute = cleanUrl.includes('/cm-studio') || cleanUrl.includes('/contmarkets');
    this.isFbdRoute = cleanUrl.includes('/face-brand-digital') || cleanUrl.includes('/fbd');
    this.isFacebrandGeneralRoute = cleanUrl.includes('/facebrand');
    
    // La landing principal solo aplica si estamos estrictamente en la raíz ('/' o '') 
    // y NINGUNA de las banderas de subempresas es verdadera.
    const isSubRouteActive = this.isSegatRoute || this.isStylesRoute || this.isBradesRoute || 
                             this.isCmRoute || this.isFbdRoute || this.isFacebrandGeneralRoute;

    this.isLandingPage = (cleanUrl === '/' || cleanUrl === '') && !isSubRouteActive;
  }

  onSubscribe(event: Event): void {
    event.preventDefault();
    alert('¡Gracias por suscribirte a nuestro newsletter!');
  }
}
