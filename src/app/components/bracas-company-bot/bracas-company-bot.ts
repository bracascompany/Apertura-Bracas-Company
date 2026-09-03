import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  sender: 'bot' | 'user';
  text?: string;
  options?: { label: string; action: string }[];
  linkUrl?: string;
  linkText?: string;
}

@Component({
  selector: 'app-bracas-company-bot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bracas-company-bot.html',
  styleUrls: ['./bracas-company-bot.scss']
})
export class BracasCompanyBotComponent {
  userMessage: string = '';
  isOpen = signal<boolean>(false);
  
  messages = signal<Message[]>([
    {
      sender: 'bot',
      text: '¡Hola! Bienvenido a Bracas Company. 🌐 Selecciona la unidad de negocio o marca que deseas explorar:',
      options: [
        { label: '🍔 Bracasfood (Comidas)', action: 'bracasfood' },
        { label: '🧵 Brades (Confecciones)', action: 'brades' },
        { label: '🕶️ Bracas Styles (Accesorios)', action: 'styles' },
        { label: '📈 C&M Studios (Marketing)', action: 'cm' },
        { label: '🌿 Fundación (Medio Ambiente)', action: 'fundacion' },
        { label: '💻 FBD (Fullstack & Global)', action: 'fbd' }
      ]
    }
  ]);

  toggleChat(): void {
  }

  selectOption(action: string): void {
    let responseText = '';
    let linkUrl = '';
    let linkText = '';

    switch (action) {
      case 'bracasfood':
        responseText = '🍔 <strong>Bracasfood</strong>: Tu paladar al siguiente nivel con la mejor comida rápida y antojos.';
        linkUrl = 'https://wa.me/573218119383';
        linkText = 'Pedir en Bracasfood (WhatsApp)';
        break;
      case 'brades':
        responseText = '🧵 <strong>Brades</strong>: Confecciones y moda urbana con estilo único.';
        linkUrl = 'https://wa.me/573113355665';
        linkText = 'Ver Catálogo Brades';
        break;
      case 'styles':
        responseText = '🕶️ <strong>Bracas Styles</strong>: Los accesorios y complementos ideales para tu outfit.';
        linkUrl = 'https://wa.me/573173966891';
        linkText = 'Contactar Bracas Styles';
        break;
      case 'cm':
        responseText = '📈 <strong>C&M[JB]_Studios</strong>: Marketing digital, posicionamiento de marca y estrategias comerciales.';
        linkUrl = 'https://wa.me/573173966891';
        linkText = 'Asesoría C&M Studios';
        break;
      case 'fundacion':
        responseText = '🌿 <strong>Fundación</strong>: Proyectos ecológicos, cuidado del medio ambiente y sostenibilidad.';
        linkUrl = 'https://wa.me/573113355665';
        linkText = 'Unirme a la Fundación';
        break;
      case 'fbd':
        responseText = '💻 <strong>FBD (FaceBrandDigital)</strong>: Desarrollo Fullstack avanzado y posicionamiento global de software.';
        linkUrl = 'https://github.com/facebranddigital';
        linkText = 'Ver Repositorios GitHub';
        break;
      default:
        responseText = '¿En qué más te podemos ayudar desde Bracas Company?';
    }

    this.messages.update(msgs => [
      ...msgs,
      { sender: 'user', text: action.toUpperCase() },
      { sender: 'bot', text: responseText, linkUrl, linkText }
    ]);
  }

  sendMessage(): void {
    const text = this.userMessage.trim();

    this.messages.update(msgs => [
      ...msgs,
      { sender: 'user', text },
      { sender: 'bot', text: `Recibido. Un asesor de Bracas Company te atenderá pronto respecto a: "${text}".` }
    ]);
    this.userMessage = '';
  }
}
