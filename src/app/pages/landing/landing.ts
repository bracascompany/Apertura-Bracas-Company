import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class LandingComponent {
  showModal = signal(false);
  showRegisterModal = signal(false);

  toggleModal() {
    this.showModal.update(v => !v);
  }

  toggleRegisterModal() {
    this.showRegisterModal.update(v => !v);
  }
}
