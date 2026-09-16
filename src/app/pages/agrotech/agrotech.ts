import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-agrotech',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './agrotech.html',
  styleUrls: ['./agrotech.scss']
})
export class AgrotechComponent {
  selectedVideoUrl: SafeResourceUrl | null = null;
  selectedTitle: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  openVideoModal(title: string, youtubeUrl: string) {
    this.selectedTitle = title;
    
    // Transformar URLs de YouTube normales (watch?v= o youtu.be/) a formato embed automáticamente
    let embedUrl = youtubeUrl;
    if (youtubeUrl.includes('watch?v=')) {
      const videoId = youtubeUrl.split('watch?v=')[1]?.split('&')[0];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (youtubeUrl.includes('youtu.be/')) {
      const videoId = youtubeUrl.split('youtu.be/')[1]?.split('?')[0];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }

    this.selectedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  closeVideoModal() {
    this.selectedVideoUrl = null;
    this.selectedTitle = '';
  }
}
