import { Unidades } from './pages/unidades/unidades';
import { ContactoComponent } from './pages/contacto/contacto';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { ProductListComponent } from './pages/products/product-list/product-list';
import { ProductFormComponent } from './pages/products/product-form/product-form';
import { LoginComponent } from './pages/auth/login/login';
import { RegisterComponent } from './pages/auth/register/register';
import { CartComponent } from './pages/cart/cart';
import { Segat } from './pages/segat/segat';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
// <-- ¡FALTA ESTA LÍNEA AQUÍ! Redirige la raíz a la landing -->
  { path: '', redirectTo: 'landing', pathMatch: 'full' },

  { path: 'landing', component: Landing },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },

  // Apuntando temporalmente a LandingComponent mientras creas sus vistas dedicadas
  { path: 'soluciones', component: Landing },

  { path: 'fundacion-segat', component: Segat },
  {
    path: 'facebrand-digital',
    loadComponent: () => import('./pages/facebrand/facebrand').then((m) => m.FacebrandComponent),
  },
  {
    path: 'brades',
    loadComponent: () => import('./pages/brades/brades').then((m) => m.BradesComponent),
  },
  {
    path: 'bracas-styles',
    loadComponent: () =>
      import('./pages/bracas-styles/bracas-styles').then((m) => m.BracasStylesComponent),
  },
  {
    path: 'cm-studio',
    loadComponent: () => import('./pages/cm-studio/cm-studio').then((m) => m.CmStudioComponent),
  },

  // Productos
  { path: 'products', component: ProductListComponent, canActivate: [authGuard] },
  { path: 'products/new', component: ProductFormComponent, canActivate: [authGuard] },
  { path: 'products/edit/:id', component: ProductFormComponent, canActivate: [authGuard] },
  { path: 'nosotros', component: NosotrosComponent },

  { path: 'contacto', component: ContactoComponent },
  { path: 'unidades', component: Unidades },
  { path: '**', redirectTo: '' },
];
