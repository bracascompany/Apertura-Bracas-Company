import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: "app-unidades",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./unidades.html",
  styleUrls: ["./unidades.scss"]
})
export class Unidades {
  isModalOpen: boolean = false;
  selectedVideoUrl: SafeResourceUrl = '';
  selectedEmpresaTitle: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  openTrailer(videoUrl: string, tituloEmpresa: string) {
    // Transformamos el link de YouTube Shorts a su versión 'embed' para iframe
    const embedUrl = videoUrl.replace('shorts/', 'embed/');
    this.selectedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl + '?autoplay=1');
    this.selectedEmpresaTitle = tituloEmpresa;
    this.isModalOpen = true;
  }

  closeTrailer() {
    this.isModalOpen = false;
    this.selectedVideoUrl = '';
    this.selectedEmpresaTitle = '';
  }
}