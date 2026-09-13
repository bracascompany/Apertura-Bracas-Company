import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agrotech',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './agrotech.html',
  styleUrls: ['./agrotech.scss']
})
export class AgrotechComponent {}
