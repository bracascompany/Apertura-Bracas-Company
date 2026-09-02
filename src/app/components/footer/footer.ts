import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent implements OnInit {
  private router = inject(Router);

  isSegatRoute: boolean = false;
  isFbdRoute: boolean = false;
  isStylesRoute: boolean = false;
  isBradesRoute: boolean = false;
  isCmRoute: boolean = false;
  isFacebrandGeneralRoute: boolean = false;

  ngOnInit() {
    this.checkRoute(this.router.url);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.checkRoute(event.urlAfterRedirects);
    });
  }

  private checkRoute(url: string) {
    this.isSegatRoute = url.includes('fundacion-segat');
    this.isFbdRoute = url.includes('facebrand-digital');
    this.isStylesRoute = url.includes('bracas-styles');
    this.isBradesRoute = url.includes('brades');
    this.isCmRoute = url.includes('cont-markets') || url.includes('cm') || url.includes('studio');
    this.isFacebrandGeneralRoute = url.includes('facebrand') && !url.includes('digital');
  }

  onSubscribe(event: Event) {
    event.preventDefault();
    // Lógica opcional de suscripción
  }
}
