import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
<<<<<<< Updated upstream
export class Contacto {}
=======
export class ContactoComponent {
  enviarWhatsApp(nombre: string, correo: string, mensaje: string) {
    const texto = `Hola, mi nombre es ${nombre} (${correo}). ${mensaje}`;
    const url = `https://wa.me/573000000000?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  }
}
>>>>>>> Stashed changes
