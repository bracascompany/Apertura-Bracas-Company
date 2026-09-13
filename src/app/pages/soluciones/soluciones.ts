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
export class SolucionesComponent {}
