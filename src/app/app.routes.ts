import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing';
import { LoginComponent } from './pages/auth/login/login';
import { ContactoComponent } from './pages/contacto/contacto';
import { FundacionSegatComponent } from './pages/fundacion-segat/fundacion-segat';
import { SolucionesPageComponent } from './pages/soluciones/soluciones';
import { AgrotechComponent } from './pages/agrotech/agrotech';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'fundacion-segat', component: FundacionSegatComponent },
  { path: 'soluciones', component: SolucionesPageComponent },
  { path: 'agrotech', component: AgrotechComponent },
  { path: '**', redirectTo: '' }
];
