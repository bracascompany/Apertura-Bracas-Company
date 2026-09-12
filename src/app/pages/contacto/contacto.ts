import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-contacto",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./contacto.html",
  styleUrls: ["./contacto.scss"]
})
export class ContactoComponent {

  enviarWhatsApp(nombre: string, correo: string, empresa: string, tipo: string, mensaje: string) {
    const numeroWhatsApp = '573173966891'; // Reemplaza con tu número de WhatsApp real
    const texto = `Hola, me contacto desde Bracas Company:` +
                  `👤 *Nombre:* ${nombre}` +
                  `✉️ *Correo:* ${correo}` +
                  `🏢 *Empresa:* ${empresa}` +
                  `📋 *Tipo:* ${tipo}` +
                  `💬 *Proyecto:* ${mensaje}`;

    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  }

}