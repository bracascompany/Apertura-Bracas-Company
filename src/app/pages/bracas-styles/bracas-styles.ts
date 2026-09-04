import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bracas-styles',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bracas-styles.html',
  styleUrl: './bracas-styles.scss'
})
export class BracasStylesComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2) {}
  ngOnInit() { this.renderer.addClass(document.body, 'theme-bracas-styles'); }
  ngOnDestroy() { this.renderer.removeClass(document.body, 'theme-bracas-styles'); }
}
