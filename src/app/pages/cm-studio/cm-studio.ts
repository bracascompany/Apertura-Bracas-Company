import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cm-studio',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cm-studio.html',
  styleUrl: './cm-studio.scss'
})
export class CmStudioComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2) {}
  ngOnInit() { this.renderer.addClass(document.body, 'theme-cm-studio'); }
  ngOnDestroy() { this.renderer.removeClass(document.body, 'theme-cm-studio'); }
}
