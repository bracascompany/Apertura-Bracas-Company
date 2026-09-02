import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing';
import { ProductListComponent } from './pages/products/product-list/product-list';
import { ProductFormComponent } from './pages/products/product-form/product-form';
import { LoginComponent } from './pages/auth/login/login';
import { RegisterComponent } from './pages/auth/register/register';
import { CartComponent } from './pages/cart/cart';
import { Segat } from './pages/segat/segat';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'fundacion-segat', component: Segat },
  { path: 'facebrand-digital', loadComponent: () => import('./pages/facebrand/facebrand').then(m => m.FacebrandComponent) },
  { path: 'brades', loadComponent: () => import('./pages/brades/brades').then(m => m.BradesComponent) },
  { path: 'bracas-styles', loadComponent: () => import('./pages/bracas-styles/bracas-styles').then(m => m.BracasStylesComponent) },
  { path: 'cm-studio', loadComponent: () => import('./pages/cm-studio/cm-studio').then(m => m.CmStudioComponent) },
  { 
    path: 'products', 
    component: ProductListComponent,
    canActivate: [authGuard]
  },
  { 
    path: 'products/new', 
    component: ProductFormComponent,
    canActivate: [authGuard]
  },
  { 
    path: 'products/edit/:id', 
    component: ProductFormComponent,
    canActivate: [authGuard]
  },
  { path: '**', redirectTo: '' }
];
