import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  isLandingPage = false;
  isSegatRoute = false;
  isStylesRoute = false;
  isBradesRoute = false;
  isCmRoute = false;
  isFbdRoute = false;
  isFacebrandGeneralRoute = false;
  
  activeModal: string | null = null;
  private routerSub!: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkRoute(this.router.url);
    this.routerSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.checkRoute(event.urlAfterRedirects);
    });
  }

  ngOnDestroy() {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

  private checkRoute(url: string) {
    const cleanUrl = url.split('?')[0];
    this.isLandingPage = cleanUrl.includes('/landing') || cleanUrl === '/';
    this.isSegatRoute = cleanUrl.includes('segat');
    this.isStylesRoute = cleanUrl.includes('styles');
    this.isBradesRoute = cleanUrl.includes('brades');
    this.isCmRoute = cleanUrl.includes('cm-studio');
    this.isFbdRoute = cleanUrl.includes('facebrand-digital');
    this.isFacebrandGeneralRoute = cleanUrl.includes('/facebrand');
  }

  openModal(type: string) {
    this.activeModal = type;
  }

  closeModal() {
    this.activeModal = null;
  }

  onSubscribe(event: Event) {
    event.preventDefault();
    alert('¡Gracias por suscribirte a Bracas Company!');
  }
}