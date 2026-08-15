import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar implements OnInit, OnDestroy {
  isSegatRoute: boolean = false;
  private routerSub!: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    // Detecta la ruta inicial
    this.checkRoute(this.router.url);

    // Escucha cada cambio de ruta en tiempo real
    this.routerSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.checkRoute(event.urlAfterRedirects);
    });
  }

  private checkRoute(url: string) {
    // Si la ruta contiene 'fundacion-segat', activa el modo SEGAT
    this.isSegatRoute = url.includes('fundacion-segat');
  }

  ngOnDestroy() {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }
}
