import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit {
  public authService = inject(AuthService);
  public cartService = inject(CartService);
  private router = inject(Router);

  isSegatRoute: boolean = false;
  isFbdRoute: boolean = false;

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
  }

  onLogout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
